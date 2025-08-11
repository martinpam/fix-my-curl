<script setup lang="ts">
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="relative min-h-screen overflow-x-clip bg-black text-white">
    <!-- background blobs -->
    <div aria-hidden class="pointer-events-none absolute inset-0">
      <div
        class="absolute -top-20 -left-32 h-80 w-80 rounded-full bg-brand-500/40 blur-3xl animate-float"
      ></div>
      <div
        class="absolute -bottom-24 -right-32 h-96 w-96 rounded-full bg-fuchsia-600/30 blur-3xl animate-float"
        style="animation-delay: 2s"
      ></div>
      <div
        class="absolute top-1/3 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl animate-float"
        style="animation-delay: 4s"
      ></div>
    </div>

    <main class="page-shell">
      <header class="mb-6">
        <div>
          <h1
            class="text-2xl sm:text-4xl font-extrabold tracking-tight font-mono"
          >
            Fix my curl
          </h1>
          <p class="text-white/70 mt-1">
            Paste a broken curl, get a clean, copyable version instantly.
          </p>
        </div>
      </header>

      <router-view />
    </main>

    <Footer />
  </div>
</template>

<style scoped>
/**** no component-scoped styles; all via Tailwind ****/
</style>
