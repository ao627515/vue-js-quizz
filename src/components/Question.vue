<script setup>
import { defineProps } from "vue";
const props = defineProps(["question"]);
</script>

<template>
  <div class="mb-6">
    <h2
      class="text-xl font-semibold text-gray-800 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500"
    >
      {{ question }}
    </h2>
  </div>
</template>
