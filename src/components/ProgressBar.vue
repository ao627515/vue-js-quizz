<script setup>
import { computed, defineProps } from "vue";
const props = defineProps(["nbQuestions", "currentQuestionNb"]);

const progressPercentage = computed(() => {
  return (props.currentQuestionNb / props.nbQuestions) * 100;
});
</script>

<template>
  <div class="mb-6">
    <div class="flex justify-between text-sm text-gray-600 mb-1">
      <span>Question {{ currentQuestionNb }} sur {{ nbQuestions }}</span>
      <span>{{ Math.round(progressPercentage) }}%</span>
    </div>
    <div class="w-full bg-gray-200 rounded-full h-2.5">
      <div
        class="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-in-out"
        :style="{ width: `${progressPercentage}%` }"
      ></div>
    </div>
  </div>
</template>
