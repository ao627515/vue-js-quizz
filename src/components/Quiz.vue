<script setup>
import { ref } from "vue";
import ProgressBar from "./ProgressBar.vue";
import Question from "./Question.vue";
import ResponseRadioList from "./ResponseRadioList.vue";
import QuizSummary from "./QuizSummary.vue";

const props = defineProps(["quiz"]);

const summary = ref(false);

const displayPreviousButton = () => {
  return props.quiz?.getCurrentQuestionIndex() >= 1;
};

const displayNextButtonButton = () => {
  return !displayValidateButton();
};

const displayValidateButton = () => {
  if (props.quiz?.hasAnsweredAllQuestions) {
    summary.value = true;
  }
  return (
    props.quiz?.hasAnsweredAllQuestions &&
    props.quiz.getCurrentQuestionIndex() ===
      props.quiz.getNumberOfQuestions() - 1
  );
};

const submit = (event) => {
  const target = event.target;
  const formData = new FormData(target);
  const answer = formData.get("answer");

  if (answer === null) {
    alert("Veuillez choisir une réponse");
    return;
  }

  target.reset();
  props.quiz?.selectAnswer(answer);
  props.quiz?.goToNextQuestion();

  if (props.quiz?.isLastQuestion()) {
    props.quiz.hasAnsweredAllQuestions = true;
  }
};

const displaySummary = () => {
  return summary.value;
};

const validateQuiz = () => {
  props.quiz.quizIsFinish = true;
};

const displayForm = () => {
  return (
    !props.quiz?.hasAnsweredAllQuestions ||
    (displaySummary() && !props.quiz?.hasAnsweredAllQuestions) ||
    !displayValidateButton()
  );
};
</script>

<template>
  <div class="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
    <h1 v-if="quiz" class="text-3xl font-bold text-center text-blue-600 mb-6">
      {{ quiz?.getTitle() }}
    </h1>
    <p v-else class="text-lg text-gray-500 text-center">
      Chargement du quiz...
    </p>

    <div v-if="!quiz?.quizIsFinish" class="space-y-6">
      <ProgressBar
        :nbQuestions="quiz?.getNumberOfQuestions()"
        :currentQuestionNb="quiz?.getCurrentQuestionIndex() + 1"
      />

      <Question :question="quiz?.getCurrentQuestion().text" />

      <form
        @submit.prevent="submit"
        id="answerForm"
        v-if="displayForm()"
        class="mt-4"
      >
        <ResponseRadioList
          :options="quiz?.getCurrentQuestion().getAnswerOptions()"
        />
      </form>

      <QuizSummary
        v-if="displaySummary()"
        :userAnswers="quiz?.getUserAnswers()"
      />

      <div class="flex justify-between mt-8">
        <button
          @click="quiz?.goToPreviousQuestion()"
          v-if="displayPreviousButton()"
          type="button"
          class="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
        >
          Précédent
        </button>
        <div class="flex-grow"></div>
        <button
          v-if="displayNextButtonButton()"
          type="submit"
          form="answerForm"
          class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Suivant
        </button>
        <button
          @click="validateQuiz"
          v-if="displayValidateButton()"
          type="submit"
          form="answerForm"
          class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
        >
          Valider
        </button>
      </div>
    </div>

    <div v-else class="text-center space-y-6">
      <h2 class="text-2xl font-bold text-blue-600">
        {{ quiz?.gettatusMessage() }}
      </h2>
      <button
        @click="quiz.restartQuiz()"
        class="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Recommencer
      </button>
    </div>
  </div>
</template>
