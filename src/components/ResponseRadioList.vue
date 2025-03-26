<script setup>
import ResponseRadio from "./ResponseRadio.vue";

defineProps({
  options: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="space-y-2">
    <ResponseRadio
      v-for="(option, i) in options"
      :id="i"
      :key="option.text"
      :label="option?.text"
      :is-selected="option?.isSelected"
    />
  </div>
</template>
