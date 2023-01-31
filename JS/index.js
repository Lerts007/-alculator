function enterText(el) {
  document.getElementById("text").value += el;
}

function enterText_1(el) {
  document.getElementById("newFormula").value += document.getElementById("text").value;
  document.getElementById("newFormula").value += el;
  document.getElementById("text").value = "";
}

function addStartFormul(el) {
  document.getElementById("newFormula").value = "0" + el;
}

// Добавление в строку с id='text' числа
function btn_number(el) {
  enterText(el);
}

// Добавление в строку с id='text' разделитель целого числа
function btn_dot() {
  const Text = document.getElementById("text").value;
  if (Text.includes(".", 0) !== true) {
    enterText(".");
  }

  if (Text[0] === undefined) {
    document.getElementById("text").value = "0.";
  }
}

//Добавление математических символов
function btn_mathSymbol(el) {
  const Text = document.getElementById("text").value;
  if (Text[0] === undefined) {
    addStartFormul(el);
  }

  if (Text[0] !== undefined) {
    enterText_1(el);
  }
}

// Добавление скобок
function btn_bracket(el) {
  enterText(el);
}

function btn_equality() {
  const formul = document.getElementById("newFormula").value;
  let str = "2+2";
}
