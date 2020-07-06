import {
  LightningElement,
  track
} from 'lwc';

export default class BmiCalculator extends LightningElement {

  height;
  weight;
  @track bmi;

  recordHeight(event) {
    this.height = parseFloat(event.target.value);
  }

  recordWeight(event) {
    this.weight = parseFloat(event.target.value);
  }

  calculateBmi() {
    this.bmi = this.weight / (this.height * this.height);
  }
}
