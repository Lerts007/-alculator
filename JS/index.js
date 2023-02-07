let firstNumber;
let secondNumber;
let sign;

// Добавление в строку с id='text' числа
function btn_number(el) {
  document.getElementById("text").value += el;
  if (sign === undefined) {
    firstNumber = document.getElementById("text").value;
  }
  if (sign !== undefined) {
    secondNumber = document.getElementById("text").value;
  }
}

//Добавление символа
function btn_mathSymbol(el, el_th) {
  if (firstNumber === undefined) {
    firstNumber = 0;
  }
  document.getElementById("text").value = "";
  sign = el;

  color();
  el_th.style.background = "red";
}
function color() {
  let a = document.querySelectorAll(".btn_active");
  a.forEach((item) => (item.style.background = "#0a1f32"));
}

// Добавление в строку с id='text' разделитель целого числа
function btn_dot() {
  const Text = document.getElementById("text").value;
  if (Text.includes(".", 0) !== true) {
    document.getElementById("text").value += ".";
  }

  if (Text[0] === undefined) {
    document.getElementById("text").value = "0.";
  }
}

//Очистка данных
function btn_clear() {
  color();
  document.getElementById("text").value = "";
  firstNumber = undefined;
  secondNumber = undefined;
  sign = undefined;
}

//Подсчет значения
function btn_equality() {
  let res;
  switch (sign) {
    case "+":
      res = parseFloat(firstNumber) + parseFloat(secondNumber);
      break;
    case "-":
      res = parseFloat(firstNumber) - parseFloat(secondNumber);
      break;
    case "*":
      res = parseFloat(firstNumber) * parseFloat(secondNumber);
      break;
    case "/":
      if (secondNumber !== "0") {
        res = parseFloat(firstNumber) / parseFloat(secondNumber);
      } else {
        res = "Ошибка";
      }
      break;
  }
  console.log(firstNumber, sign, secondNumber, "=", res);
  document.getElementById("text").value = res;
}
