<script setup lang="ts">
import { ref, computed } from 'vue';
import { Check, Copy } from 'lucide-vue-next';

const props = defineProps<{ text: string; label?: string }>();
const copied = ref(false);
const isDisabled = computed(() => !props.text || props.text.length === 0);

async function onCopy() {
  if (isDisabled.value) return;
  try {
    await navigator.clipboard.writeText(props.text);
    copied.value = true;
    setTimeout(() => (copied.value = false), 1500);
  } catch {
    // no-op
  }
}
</script>

<template>
  <button
    type="button"
    class="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-sm text-white/80 hover:bg-white/15 transition-colors"
    :class="
      isDisabled
        ? 'cursor-not-allowed opacity-50 hover:bg-white/10'
        : 'cursor-pointer'
    "
    @click="onCopy"
    :aria-label="label ?? 'Copy to clipboard'"
    :disabled="isDisabled"
  >
    <component :is="copied ? Check : Copy" class="h-4 w-4" />
    <span>{{ copied ? 'Copied' : label ?? 'Copy' }}</span>
  </button>
</template>
