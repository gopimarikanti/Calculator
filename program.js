let displayElement = document.getElementById("display");

function appendValue(value) {
  if (displayElement.innerText === "0") {
    displayElement.innerText = value;
  } else {
    displayElement.innerText += value;
  }
}

function clearDisplay() {
  displayElement.innerText = "0";
}

function calculate() {
  try {
    displayElement.innerText = eval(displayElement.innerText.replace("÷", "/").replace("×", "*"));
  } catch {
    displayElement.innerText = "Error";
  }
}
