import { AnswerOption } from "./AnwserQuestion";

export class Question {
  constructor({ text, answerOptions }) {
    this.text = text;
    this.answerOptions = answerOptions?.map(option => new AnswerOption(option));
  }

  getText() {
    return this.text;
  }

  getAnswerOptions() {
    return this.answerOptions;
  }

  answerQuestion(selectedOptions) {
    this.answerOptions.forEach(option => option.isSelected = selectedOptions.includes(option));
  }

  isAnsweredCorrectly() {
    return this.answerOptions.every(option => option.isCorrect === option.isSelected);
  }

  selectAnswer(selectedOptionText) {
    this.unselectLastAnswerSelected();
    return this.answerOptions.find(option => option.text === selectedOptionText)?.select();
  }

  unselectLastAnswerSelected() {
    this.answerOptions.find(option => option.isSelected)?.unselect();
  }

  unselectAllAnswerSelected() {
    this.getSelectedAnswerOptions().forEach(option => option.unselect());
  }

  getSelectedAnswerOptions() {
    return this.answerOptions.filter(option => option.isSelected);
  }

}



