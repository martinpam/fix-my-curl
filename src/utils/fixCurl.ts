export interface FixCurlResult {
  fixed: string;
  issues: string[];
}

function replaceSmartQuotes(input: string): string {
  return input.replace(/[“”]/g, '"').replace(/[‘’]/g, "'");
}

function joinLineContinuations(input: string): string {
  // Join lines ending with backslash into one line
  return input
    .split(/\r?\n/)
    .reduce<string[]>((acc, line) => {
      const prev = acc.pop();
      if (prev === undefined) {
        acc.push(line);
      } else if (/\\\s*$/.test(prev)) {
        acc.push(prev.replace(/\\\s*$/, ' ') + line.trim());
      } else {
        acc.push(prev, line);
      }
      return acc;
    }, [])
    .join('\n');
}

function tokenize(cmd: string): string[] {
  // Naive tokenizer respecting quotes
  const tokens: string[] = [];
  let current = '';
  let quote: '"' | "'" | null = null;
  for (let i = 0; i < cmd.length; i++) {
    const ch = cmd[i];
    if (quote) {
      current += ch;
      if (ch === quote) quote = null;
      continue;
    }
    if (ch === '"' || ch === "'") {
      quote = ch;
      current += ch;
      continue;
    }
    if (/\s/.test(ch)) {
      if (current) {
        tokens.push(current);
        current = '';
      }
    } else {
      current += ch;
    }
  }
  if (current) tokens.push(current);
  return tokens;
}

export function fixCurl(rawInput: string): FixCurlResult {
  const issues: string[] = [];
  if (!rawInput.trim()) {
    return { fixed: '', issues };
  }

  // Normalize smart quotes and line continuations
  let input = replaceSmartQuotes(rawInput).trim();
  if (input !== rawInput.trim())
    issues.push('Replaced smart quotes with ASCII quotes');

  input = joinLineContinuations(input);

  // Ensure it starts with curl
  if (!/^curl\b/.test(input)) {
    issues.push('Added missing curl prefix');
    input = 'curl ' + input;
  }

  // Tokenize and analyze
  const tokens = tokenize(input);

  // Build structured command
  let url = '';
  let method: string | undefined;
  const headers: string[] = [];
  let data: string | undefined;
  const others: string[] = [];

  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (t === 'curl') continue;

    if (t === '-X' || t === '--request') {
      const m = tokens[i + 1];
      if (m) {
        method = m.toUpperCase();
        i++;
      } else {
        issues.push('Found -X/--request without method');
      }
      continue;
    }

    if (t === '-H' || t === '--header') {
      let h = tokens[i + 1];
      if (h) {
        i++;
        // If header not quoted and contains colon, wrap in single quotes
        if (!/^['"].*['"]$/.test(h) && /:\s*/.test(h)) {
          h = `'${h}'`;
          issues.push('Wrapped unquoted header value in quotes');
        }
        headers.push(h);
      } else {
        issues.push('Found -H/--header without value');
      }
      continue;
    }

    if (
      t === '-d' ||
      t === '--data' ||
      t === '--data-raw' ||
      t === '--data-binary' ||
      t === '--data-urlencode'
    ) {
      const v = tokens[i + 1];
      if (v) {
        i++;
        data = v;
      } else {
        issues.push('Found data flag without value');
      }
      continue;
    }

    if (/^https?:\/\//i.test(t)) {
      url = t;
      continue;
    }

    // Unrecognized token
    others.push(t);
  }

  if (!url) {
    // Try to recover URL from others (first non-flag token)
    const guessed = others.find((t) => !t.startsWith('-'));
    if (guessed) {
      url = guessed;
      issues.push('Guessed URL position');
    }
  }

  if (!url) {
    return { fixed: input, issues: ['Could not detect URL'] };
  }

  if (!method && data) {
    method = 'POST';
    issues.push('Added -X POST because body data was detected');
  }

  if (method === 'GET' && data) {
    method = 'POST';
    issues.push(
      'Changed method from GET to POST because body data was present'
    );
  }

  // Canonical multi-line output
  const lines: string[] = [];
  lines.push('curl \\');
  lines.push(`  ${method ? `-X ${method} \\\n  ` : ''}${url} \\`);

  for (const h of headers) {
    // Ensure single-quoted header formatting
    let v = h;
    if (!/^['"].*['"]$/.test(v)) v = `'${v}'`;
    lines.push(`  -H ${v} \\`);
  }

  if (data) {
    // Prefer --data over -d for clarity
    lines.push(`  --data ${data}`);
  } else if (lines.length > 0) {
    // Remove trailing backslash on last header line
    lines[lines.length - 1] = lines[lines.length - 1].replace(/ \\\s*$/, '');
  }

  const fixed = lines.join('\n');
  return { fixed, issues };
}
