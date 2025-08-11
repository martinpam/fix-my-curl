<script setup lang="ts">
defineProps<{
  label: string;
  classes?: string;
  compact?: boolean;
  accent?: boolean;
}>();
</script>

<template>
  <span
    class="inline-flex items-center gap-1 border text-[11px] font-medium tracking-wide"
    :class="[
      compact ? 'rounded-md px-1.5 py-0.5' : 'rounded-lg px-2.5 py-1',
      classes ||
        (accent
          ? 'bg-gradient-to-r from-brand-500/25 to-fuchsia-600/25 text-white/80 border-white/20'
          : 'bg-white/10 text-white/70 border-white/20'),
    ]"
  >
    {{ label }}
  </span>
</template>
