//alert("Script is working!!");
const userInput = document.getElementById("input-number"); //to fetch input
const addBtn = document.getElementById("btn-add");
const subtractBtn = document.getElementById("btn-subtract");
const multiplyBtn = document.getElementById("btn-multiply");
const divideBtn = document.getElementById("btn-divide");
const currentCalculationOutput = document.getElementById("current-calculation");
const currentResultOutput = document.getElementById("current-result");
const resetBtn = document.getElementById("btn-Reset");

const defaultResult = 0;
let currentResult = defaultResult;

function outputResult(result, resultDesc) {
  currentResultOutput.innerHTML = result;
  currentCalculationOutput.innerHTML = resultDesc;
}

function getUserInput() {
  return parseInt(userInput.value);
}

function createLog(operator, resultBeforCalc, calcNumber) {
  const calcDesc = `${resultBeforCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDesc);
}

function add() {
  const enteredNumber = getUserInput();
  const initialNumber = currentResult;
  currentResult += enteredNumber;
  createLog("+", initialNumber, enteredNumber);
}
function subtract() {
  const enteredNumber = getUserInput();
  const initialNumber = currentResult;
  currentResult -= enteredNumber;
  createLog("-", initialNumber, enteredNumber);
}
function multiply() {
  const enteredNumber = getUserInput();
  const initialNumber = currentResult;
  currentResult *= enteredNumber;
  createLog("*", initialNumber, enteredNumber);
}
function divide() {
  const enteredNumber = getUserInput();
  const initialNumber = currentResult;
  currentResult /= enteredNumber;
  createLog("/", initialNumber, enteredNumber);
}
function reset() {
  console.log(`initial ${currentResult}`);
  const enteredNumber = "";
  const initialNumber = "";
  currentResult = defaultResult;
  console.log(`final ${currentResult}`);
  createLog(" ", initialNumber, enteredNumber);
}

addBtn.addEventListener("click", add);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
subtractBtn.addEventListener("click", subtract);
resetBtn.addEventListener("click", reset);
