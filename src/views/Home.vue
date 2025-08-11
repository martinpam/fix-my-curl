<script setup lang="ts">
import { ref, computed } from 'vue';
import { fixCurl } from '../utils/fixCurl';
import CopyButton from '../components/CopyButton.vue';
import TagChip from '../components/TagChip.vue';
import { Wand2, Bug, Terminal, ShieldCheck } from 'lucide-vue-next';

const input = ref('');
const result = computed(() => fixCurl(input.value));
const placeholder = `curl -X GET https://api.example.com/search -H Accept: application/json -d '{"q":"why is my curl broken?"}'`;
</script>

<template>
  <section class="grid gap-4">
    <div class="glass-card">
      <label class="section-title">
        <Terminal class="h-4 w-4" /> Your curl
      </label>
      <textarea
        v-model="input"
        :placeholder="placeholder"
        spellcheck="false"
        class="glass-input"
      />
    </div>

    <div class="glass-card">
      <div class="mb-2 flex items-center justify-between">
        <div class="flex items-center gap-2 text-sm text-white/70">
          <Wand2 class="h-4 w-4" /> Fixed curl
        </div>
        <CopyButton :text="result.fixed" label="Copy curl" />
      </div>
      <pre class="code-pre min-h-20"><code>{{ result.fixed }}</code></pre>

      <div class="mt-3">
        <div class="meta-label" aria-hidden="true">
          <Bug class="h-3 w-3" />
          <span>Detected issues</span>
          <span class="font-medium">+{{ result.issues.length }}</span>
        </div>
        <div class="flex flex-wrap items-center gap-1.5 text-xs">
          <TagChip
            v-for="(issue, idx) in result.issues"
            :key="idx"
            :label="issue"
          />
          <TagChip
            v-if="!result.issues.length"
            label="No obvious issues"
            classes="bg-white/10 text-white/60 border-white/20"
          />
        </div>
      </div>
    </div>

    <div class="glass-card">
      <div class="flex items-center gap-2 text-sm text-white/70">
        <ShieldCheck class="h-4 w-4" /> Privacy & transparency
      </div>
      <p class="mt-2 text-sm text-white/70">
        All processing happens entirely in your browser. We do not use cookies.
        We do not send or store your data. This project is open source — see the
        <a
          class="text-brand-400 hover:text-brand-300"
          href="https://github.com/martinpam/fix-my-curl"
          target="_blank"
          rel="noopener"
          >GitHub repository</a
        >.
      </p>
    </div>
  </section>
</template>
