<template>
  <footer class="border-t border-white/10 bg-black/50 text-white/70">
    <div class="footer-shell">
      <div class="footer-card">
        <div class="footer-grid">
          <div class="footer-columns">
            <div class="footer-col">
              <div class="footer-heading">Legal</div>
              <a class="footer-link" href="/imprint">Imprint</a>
              <a class="footer-link" href="/privacy">Privacy</a>
            </div>

            <div class="footer-col">
              <div class="footer-heading">Company</div>
              <a class="footer-link" href="/faq">FAQ</a>
              <a
                class="footer-link"
                href="https://www.psquared.dev"
                target="_blank"
                rel="noopener"
                >psquared.dev</a
              >
              <a
                class="footer-link"
                href="https://ki-jobs.dev"
                target="_blank"
                rel="noopener"
                >ki-jobs.dev</a
              >
              <a
                class="footer-link"
                href="https://github.com/martinpam/fix-my-curl"
                target="_blank"
                rel="noopener"
                >GitHub</a
              >
            </div>

            <div class="footer-col">
              <div class="footer-heading">Social</div>
              <a
                class="footer-link"
                href="https://x.com/OnePromptMagic"
                target="_blank"
                rel="noopener"
                >@OnePromptMagic</a
              >
              <a
                class="footer-link"
                href="https://x.com/pixelAndNeuron"
                target="_blank"
                rel="noopener"
                >@pixelAndNeuron</a
              >
            </div>
          </div>
          <div class="footer-note">
            © {{ new Date().getFullYear() }} psquared GmbH
          </div>
        </div>
        <p class="mt-6 text-sm text-white/60 leading-relaxed">
          Fix my curl is a simple, privacy‑first tool to repair malformed curl
          commands and format them into clean, copyable snippets. Everything
          runs locally in your browser with no cookies, no tracking, and no data
          sent to servers. Open source on
          <a
            class="text-brand-400 hover:text-brand-300"
            href="https://github.com/martinpam/fix-my-curl"
            target="_blank"
            rel="noopener"
            >GitHub</a
          >.
        </p>
      </div>
    </div>
  </footer>
</template>
