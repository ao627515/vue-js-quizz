<script setup>
import { defineProps } from "vue";
defineProps({
  userAnswers: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 my-6">
    <h2 class="text-xl font-semibold text-gray-800 mb-4">Résumé</h2>
    <div class="space-y-4">
      <div
        v-for="(answer, index) in userAnswers"
        :key="index"
        class="p-3 bg-white rounded-lg shadow-sm"
      >
        <p class="font-medium text-gray-700">{{ answer.question }}</p>
        <p class="mt-1 text-blue-600">Votre réponse: {{ answer.answer }}</p>
      </div>
    </div>
  </div>
</template>
