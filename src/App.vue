<script setup>
import { ref, onMounted } from "vue";
import Quiz from "./components/Quiz.vue";
import { Quiz as QuizModel } from "./models/Quiz.js";

const quiz = ref(null);

onMounted(() => {
  fetch("quiz/otaku_quiz.json")
    .then((res) => res.json())
    .then((data) => {
      quiz.value = new QuizModel(data);
      // console.log(quiz.value);
    })
    .catch((err) =>
      console.error("Erreur lors de la récupération du JSON :", err)
    );
});
</script>

<template>
  <Quiz :quiz="quiz" />
</template>
