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
function btn_mathSymbol(el) {
  if (firstNumber === undefined) {
    firstNumber = 0;
  }
  document.getElementById("text").value = "";
  sign = el;
  document.getElementById("text").value += sign;
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

function btn_clear() {
  firstNumber = undefined;
  secondNumber = undefined;
  sign = undefined;
}

function btn_equality() {
  console.log(firstNumber, sign, secondNumber);
}

//Добавление математических символов
// function btn_mathSymbol(el) {
//   const Text = document.getElementById("text").value;
//   if (Text[0] === undefined) {
//     addStartFormul(el);
//   }

//   if (Text[0] !== undefined) {
//     enterText_1(el);
//   }
// }

// function btn_equality() {
//   const formul = document.getElementById("newFormula").value;
//   let f = [];
//   let str = "2.3+(2*(10/2))";
//   let count = 0;

//   while (str.length > 0) {
//     if (!isNaN(str[0])) {
//       f[count] = parseFloat(str);
//     } else {
//       f[count] = str[0];
//     }

//     str = str.replace(f[count], "");
//     count++;
//   }

//   console.log(f);

//   let indx = f.indexOf("(");

//   while (indx != -1) {}
// }
