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

  let a = document.querySelectorAll(".btn_active");
  a.forEach((item) => (item.style.background = "#0a1f32"));
  el_th.style.background = "red";
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
  document.getElementById("text").value = "";
  firstNumber = undefined;
  secondNumber = undefined;
  sign = undefined;
}

//Подсчет значения
function btn_equality() {
  console.log(firstNumber, sign, secondNumber);
}
