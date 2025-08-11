<script setup lang="ts">
import { Building2, Mail, MapPin, UserRound } from 'lucide-vue-next';
</script>

<template>
  <section
    class="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5"
  >
    <h2 class="text-lg font-bold mb-3 flex items-center gap-2">
      <Building2 class="h-5 w-5" /> Imprint
    </h2>

    <div class="grid gap-4 text-sm text-white/80">
      <div>
        <div class="text-white/60 text-xs">Company</div>
        <div>psquared GmbH</div>
      </div>
      <div class="grid sm:grid-cols-2 gap-4">
        <div>
          <div class="text-white/60 text-xs">Commercial Register Number</div>
          <div>FN 647249m</div>
        </div>
        <div>
          <div class="text-white/60 text-xs">Tax ID</div>
          <div>ATU81780404</div>
        </div>
      </div>
      <div>
        <div class="text-white/60 text-xs">Managing Directors</div>
        <div class="flex items-center gap-2">
          <UserRound class="h-4 w-4" /> Martin Pammesberger, Manuel Pils
        </div>
      </div>
      <div>
        <div class="text-white/60 text-xs">Responsible for content</div>
        <div>Martin Pammesberger</div>
      </div>
      <div class="grid sm:grid-cols-2 gap-4">
        <div class="flex items-start gap-2">
          <MapPin class="h-4 w-4 mt-0.5" />
          <div>
            <div class="text-white/60 text-xs">Address</div>
            <div>Dametzstraße 2-4, 4020 Linz, Austria</div>
          </div>
        </div>
        <div class="flex items-start gap-2">
          <Mail class="h-4 w-4 mt-0.5" />
          <div>
            <div class="text-white/60 text-xs">Email</div>
            <a
              class="text-brand-400 hover:text-brand-300"
              href="mailto:office@psquared.dev"
              >office@psquared.dev</a
            >
          </div>
        </div>
      </div>

      <div class="pt-2 border-t border-white/10">
        <div class="text-white/60 text-xs mb-1">Links</div>
        <div class="flex flex-wrap gap-3">
          <a
            class="hover:text-white text-white/80"
            href="https://www.psquared.dev"
            target="_blank"
            rel="noopener"
            >psquared.dev</a
          >
          <a
            class="hover:text-white text-white/80"
            href="https://ki-jobs.dev"
            target="_blank"
            rel="noopener"
            >ki-jobs.dev</a
          >
          <a
            class="hover:text-white text-white/80"
            href="https://github.com/martinpam/fix-my-curl"
            target="_blank"
            rel="noopener"
            >GitHub repo</a
          >
          <a
            class="hover:text-white text-white/80"
            href="https://x.com/OnePromptMagic"
            target="_blank"
            rel="noopener"
            >@OnePromptMagic</a
          >
          <a
            class="hover:text-white text-white/80"
            href="https://x.com/pixelAndNeuron"
            target="_blank"
            rel="noopener"
            >@pixelAndNeuron</a
          >
        </div>
      </div>
    </div>
  </section>
</template>
