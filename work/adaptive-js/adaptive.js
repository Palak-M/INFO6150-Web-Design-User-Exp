const inputText = document.getElementsByClassName("label__input");
const clickButton = document.getElementsByClassName("add-form__submit");
const changedText = document.getElementsByClassName("info__report");
clickButton[0].addEventListener('click', keyVal, false);
const countNum = {};
function keyVal(e) {
  e.preventDefault();
  const countNumKey = inputText[0].value.trim();
  countNum[countNumKey] = countNum[countNumKey] + 1 || 1;
  changedText[0].innerText =
    "The count for " + countNumKey + " is " + countNum[countNumKey];
}
clickButton[0].disabled = true;
inputText[0].addEventListener("input", stateHandle);
function stateHandle() {
  if (!inputText[0].value) {
    clickButton[0].disabled = true;
  } else {
    clickButton[0].disabled = false;
  }
}