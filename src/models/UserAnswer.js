export class UserAnswer {
  constructor({ question, answer, isCorrect }) {
    this.question = question;
    this.answer = answer;
    this.isCorrect = isCorrect;
  }

  getQuestion() {
    return this.question;
  }

  getAnswer() {
    return this.answer;
  }

  isCorrect() {
    return this.isCorrect;
  }
}