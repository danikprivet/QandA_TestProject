const CurrentYear = 2023;
const CorrentAnswer = "Ответ правильный";
const IncorrectAnswer = "Ответ неправильынй";

const inputNode = document.querySelector(".js-input");
const buttonNode = document.querySelector(".js-button");
const outputNode = document.querySelector(".js-output");

buttonNode.addEventListener("click", function(){
  const inputValue = inputNode.value;

  if (!inputValue) {
    return;
  }
  const answer = Number(inputNode.value);
  let output = CorrentAnswer;

  if (answer !== CurrentYear) {
    output = IncorrectAnswer;
  }

  outputNode.innerHTML = output;
})
