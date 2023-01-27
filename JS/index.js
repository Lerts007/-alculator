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

function btn_number(el) {
  enterText(el);
}

function btn_dot() {
  const Text = document.getElementById("text").value;
  if (Text.includes(".", 0) !== true) {
    enterText(".");
  }

  if (Text[0] === undefined) {
    document.getElementById("text").value = "0.";
  }
}
function btn_addtion() {
  const Text = document.getElementById("text").value;
  if (Text[0] === undefined) {
    addStartFormul("+");
  }

  if (Text[0] !== undefined) {
    enterText_1("+");
  }
}
