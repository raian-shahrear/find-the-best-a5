// Get and Set Value to The Input Field
function getInputValueById(inputId){
  const inputField = document.getElementById(inputId);
  const inputValueInString = inputField.value;
  const inputValue = parseInt(inputValueInString);
  return inputValue;
}

function setInputValue_BackgroundById(inputId){
  const inputField = document.getElementById(inputId);
  inputField.value = '';
  inputField.style.backgroundColor = '#fab1a0';
}


// Get and Set Value to The Element Field
function getElementValueById(elementId){
  const elementField = document.getElementById(elementId);
  const elementValueInString = elementField.innerText;
  const elementValue = parseInt(elementValueInString);
  return elementValue;
}

function setElementValueById(elementId, elementValue){
  const elementField = document.getElementById(elementId);
  elementField.innerText = elementValue;
}