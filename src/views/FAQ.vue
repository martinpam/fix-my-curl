<script setup lang="ts">
import { Info } from 'lucide-vue-next';
</script>

<template>
  <section
    class="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4"
  >
    <div class="mb-3 flex items-center gap-2 text-sm text-white/70">
      <Info class="h-4 w-4" /> FAQ
    </div>
    <div class="grid gap-4 text-sm text-white/80">
      <details class="rounded-lg border border-white/10 bg-black/30 p-3">
        <summary class="cursor-pointer font-semibold">
          What does Fix my curl do?
        </summary>
        <p class="mt-2 text-white/70">
          It normalizes quotes, headers, methods, and formats your curl into a
          clean, multi‑line command.
        </p>
      </details>
      <details class="rounded-lg border border-white/10 bg-black/30 p-3">
        <summary class="cursor-pointer font-semibold">
          Which curl mistakes can it repair?
        </summary>
        <p class="mt-2 text-white/70">
          Common fixes include smart quotes, unquoted headers, wrong HTTP method
          with body, and broken line continuations.
        </p>
      </details>
      <details class="rounded-lg border border-white/10 bg-black/30 p-3">
        <summary class="cursor-pointer font-semibold">
          Is the curl run anywhere?
        </summary>
        <p class="mt-2 text-white/70">
          No. Processing happens client‑side in your browser; no requests are
          sent to any server.
        </p>
      </details>
      <details class="rounded-lg border border-white/10 bg-black/30 p-3">
        <summary class="cursor-pointer font-semibold">
          How do I copy the fixed curl?
        </summary>
        <p class="mt-2 text-white/70">
          Use the Copy button above the result box to copy it to your clipboard.
        </p>
      </details>
    </div>
  </section>
</template>
