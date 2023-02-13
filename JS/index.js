let firstNumber;
let secondNumber;
let sign;
//Нужен для того, чтобы после нажатия равно нельзя было добавить значение к результату
let finish = false;
//список +-/*
let a = document.querySelectorAll(".btn_active");

// Ввод спомощью клавиатуры
document.addEventListener("keydown", function (event) {
  if (parseInt(event.key) >= 0) {
    btn_number(parseInt(event.key));
  }
  if (event.key === "." || event.key === ",") {
    btn_dot();
  }
  if (event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/") {
    btn_mathSymbol(event.key);
  }
  if (event.key === "Enter") {
    btn_equality();
  }
});

// Добавление в строку с id='text' числа
function btn_number(el) {
  if ((!finish || sign !== undefined) && document.getElementById("text").value.length < 18) {
    document.getElementById("text").value += el;
    if (sign === undefined) {
      firstNumber = document.getElementById("text").value;
    }
    if (sign !== undefined) {
      secondNumber = document.getElementById("text").value;
    }
  }
}

//Добавление символа
function btn_mathSymbol(el) {
  if (firstNumber === undefined) {
    firstNumber = 0;
  }
  document.getElementById("text").value = "";
  sign = el;

  color();

  for (let i = 0; i < a.length; i++) {
    if (a[i].firstChild.nodeValue == el) {
      a[i].style.background = "red";
    }
  }
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

//Смена знака
function btn_signChange() {
  if (sign === undefined) {
    firstNumber = parseFloat(firstNumber) * -1;
    document.getElementById("text").value = firstNumber;
  }
  if (sign !== undefined) {
    secondNumber = parseFloat(secondNumber) * -1;
    document.getElementById("text").value = secondNumber;
  }
}

//Очистка данных
function btn_clear() {
  color();
  document.getElementById("text").value = "";
  finish = false;
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

  console.log(typeof res);

  finish = true;
  sign = undefined;

  //Длинна целлой части
  resLC = res.toString().slice(0, res.toString().indexOf(".")).length;

  if (res.toString().length <= 18) {
    document.getElementById("text").value = res;
  } else {
    if (Number.isInteger(res) && res.toString().length > 18) {
      document.getElementById("text").value = "Длинный результат";
    } else {
      if (resLC <= 16) {
        // parseInt(res.toString()[res.toString().indexOf('.')+1]) < 5 )
        res = Math.round(res * Math.pow(10, 18 - resLC)) / Math.pow(10, 18 - resLC);
      } else {
        document.getElementById("text").value = "Длинный результат";
      }
    }
  }

  firstNumber = res;

  color();
}
