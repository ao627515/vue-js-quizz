<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  isSelected: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    class="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-blue-50 transition cursor-pointer"
  >
    <input
      type="radio"
      name="answer"
      :value="label"
      :checked="isSelected"
      class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 focus:ring-2"
    />
    <label class="ml-3 text-gray-700 cursor-pointer">{{ label }}</label>
  </div>
</template>
