export class AnswerOption {
  constructor({ text, isCorrect }) {
    this.text = text;
    this.isCorrect = isCorrect;
    this.isSelected = false;
  }

  getText() {
    return this.text;
  }

  isOptionCorrect() {
    return this.isCorrect;
  }

  select() {
    this.isSelected = true;
  }

  unselect() {
    this.isSelected = false;
  }
}