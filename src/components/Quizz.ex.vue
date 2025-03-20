<script setup>
import { computed, ref, watch } from "vue";
import ProgressBar from "./ProgressBar.vue";
import Question from "./Question.vue";
import ResponseRadioList from "./ResponseRadioList.vue";
import ResponseRadio from "./ResponseRadio.vue";

const props = defineProps(["quiz"]);
const questionIndex = ref(0);
const nbQuestions = computed(() => props.quiz?.questions.length);

const currentQuestion = computed(() => {
  return props.quiz?.questions[questionIndex.value];
});

const choices = [];

const win = computed(() => {
  return choices.length === nbQuestions.value;
});

const previous = () => {
  if (questionIndex.value === 0) {
    return;
  }
  questionIndex.value--;
};

const next = () => {
  if (questionIndex.value === nbQuestions.value - 1) {
    return;
  }
  questionIndex.value++;
};

const submit = (event) => {
  const target = event.target;
  const formData = new FormData(target);
  const answer = formData.get("answer");

  if (answer === null) {
    alert("Veuillez choisir une réponse");
    return;
  }

  choices[questionIndex.value] = answer;
  console.log(choices);
  target.reset();
  next();
};
</script>

<template>
  <h1 v-if="quiz">{{ quiz?.title }}</h1>
  <p v-else>Chargement du quiz...</p>

  <div v-if="!win">
    <ProgressBar
      :nbQuestions="nbQuestions"
      :currentQuestionNb="questionIndex + 1"
    />

    <Question :question="currentQuestion?.question" />

    <form @submit.prevent="submit" id="answerForm">
      <ResponseRadioList :options="currentQuestion?.options" />
    </form>

    <button @click="previous" v-if="questionIndex >= 1" type="button">
      Precedent
    </button>

    <button
      v-if="questionIndex <= nbQuestions - 2"
      type="submit"
      form="answerForm"
    >
      Suivant
    </button>

    <button
      v-if="questionIndex === nbQuestions - 1"
      type="submit"
      form="answerForm"
    >
      Valider
    </button>
  </div>
  <div v-else></div>
</template>
