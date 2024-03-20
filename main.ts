#!/usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "firstNumber" },
  {
    message: "enter second Number",
    type: "number",
    name: "secondNumber",
  },
  {
    message: "select one operator from operator",
    type: "list",
    name: "operator",
    choices: ["Addition", "subtraction", "Multiplication", "Division"],
  },
]);
// console.log(answer);
if (answer.operator === "Addition") {
  console.log("your answer is", answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "subtraction") {
  console.log("your answer is", answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication") {
  console.log("your answer is", answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Division") {
  console.log("your answer is", answer.firstNumber / answer.secondNumber);
} else {
  console.log("Please enter valid operator");
}
