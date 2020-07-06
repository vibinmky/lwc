import {
  LightningElement,
  track
} from 'lwc';

export default class Calculator extends LightningElement {

  @track currentResult;
  @track resultList = [];
  @track check = false;

  firstNumber;
  secondNumber;

  getNumber(event) {
    const inputNumber = event.target.name;

    if (inputNumber === "firstNumber") {
      this.firstNumber = event.target.value;
    } else {
      this.secondNumber = event.target.value;
    }
  }

  add() {
    const firstNum = parseInt(this.firstNumber);
    const secondNum = parseInt(this.secondNumber);
    //Regular method
    //this.currentResult = 'Sum of ' + firstNum + ' and ' + secondNum + ' is  ' + (firstNum + secondNum);
    //String literal method
    this.currentResult = `Sum of ${firstNum} and ${secondNum} is ${firstNum+secondNum}`;
    this.resultList.push(this.currentResult);

  }

  sub() {
    const firstNum = parseInt(this.firstNumber);
    const secondNum = parseInt(this.secondNumber);

    //Regular method
    // this.currentResult = 'sub of ' + firstNum + ' and ' + secondNum + ' is  ' + (firstNum - secondNum);
    //String literal method
    this.currentResult = `Sub of ${firstNum} and ${secondNum} is ${firstNum-secondNum}`;
    this.resultList.push(this.currentResult);
  }

  mul() {
    const firstNum = parseInt(this.firstNumber);
    const secondNum = parseInt(this.secondNumber);

    //Regular method
    // this.currentResult = 'mul of ' + firstNum + ' and ' + secondNum + ' is  ' + (firstNum * secondNum);
    //String literal method
    this.currentResult = `Mul of ${firstNum} and ${secondNum} is ${firstNum*secondNum}`;
    this.resultList.push(this.currentResult);
  }

  div() {
    const firstNum = parseInt(this.firstNumber);
    const secondNum = parseInt(this.secondNumber);

    //Regular method
    // this.currentResult = 'div of ' + firstNum + ' and ' + secondNum + ' is  ' + (firstNum / secondNum);
    //String literal method
    this.currentResult = `Div of ${firstNum} and ${secondNum} is ${firstNum/secondNum}`;
    this.resultList.push(this.currentResult);
  }

  //show list itesm checkbox true
  previousResult(event) {
    this.check = event.target.checked;

  }

}
