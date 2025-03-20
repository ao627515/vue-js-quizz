import { Question } from "./Question.js";
import { UserAnswer } from "./UserAnswer.js";

export class Quiz {

  hasAnsweredAllQuestions = false;
  quizIsFinish = false;

  constructor({
    title,
    description,
    min_score,
    success_message,
    failure_message,
    questions
  }) {
    this.title = title;
    this.description = description;
    this.minScore = min_score;
    this.successMessage = success_message;
    this.failureMessage = failure_message;
    this.questions = questions?.map(question => new Question(question));
    this.currentQuestionIndex = 0;
  }

  getTitle() {
    return this.title;
  }

  setTitle(title) {
    this.title = title;
  }

  getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex] || null;
  }

  answerCurrentQuestion(answerOptions) {
    const question = this.getCurrentQuestion();
    if (question) {
      question.answerQuestion(answerOptions);
    }
  }

  goToNextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      return true;
    }
    return false;
  }

  goToPreviousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      return true;
    }
    return false;
  }

  restartQuiz() {
    this.currentQuestionIndex = 0;

    this.questions.forEach(question => {
      question.unselectAllAnswerSelected();
    });

    this.hasAnsweredAllQuestions = false;
    this.quizIsFinish = false;

    // console.log('to');

  }

  getScore() {
    const correctAnswersNumber = this.getUserAnswers().filter(answer => answer.isCorrect).length;
    const totalQuestions = this.questions.length;
    return totalQuestions - correctAnswersNumber;
  }

  isPassed() {
    return this.getScore() >= this.minScore;
  }

  getNumberOfQuestions() {
    return this.questions.length;
  }

  getCurrentQuestionIndex() {
    return this.currentQuestionIndex;
  }

  selectAnswer(selectedOptionText) {
    return this.getCurrentQuestion().selectAnswer(selectedOptionText);
  }

  getUserAnswers() {
    const userAnswers = this.questions
      .map(question => {
        const selectedOption = question.getAnswerOptions().find(option => option.isSelected);
        return selectedOption ? new UserAnswer({
          question: question.getText(),
          answer: selectedOption.getText(),
          isCorrect: selectedOption.isOptionCorrect()
        }) : null;
      })
      .filter(answer => answer !== null);

    // if (userAnswers.length === this.questions.length) {
    //   this.hasAnsweredAllQuestions = true;
    // }

    return userAnswers;
  }

  gettatusMessage() {
    const passed = this.isPassed();
    return passed ? this.successMessage : this.failureMessage;
  }

  isLastQuestion() {
    return this.currentQuestionIndex === this.questions.length - 1;
  }
}


