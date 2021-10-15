var inputText = document.getElementsByClassName("label__input");
var clickButton = document.getElementsByClassName("add-form__submit");
var changedText = document.getElementsByClassName("info__report");

clickButton[0].addEventListener('click', keyVal, false);
var obj = {};
function keyVal(e) {
  e.preventDefault();
  var objKey = inputText[0].value.trim();
  typeof obj[objKey] === 'undefined' ? obj[objKey] = 1 : obj[objKey]++;
  console.log(obj);
  changedText[0].innerText =
    "The count for " + objKey + " is " + obj[objKey];
}

clickButton[0].disabled = true;
inputText[0].addEventListener("input", stateHandle);

function stateHandle() {
  if (inputText[0].value.trim() === "") {
    clickButton[0].disabled = true;
  } else {
    clickButton[0].disabled = false;
  }
}
