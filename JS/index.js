const Text = document.getElementById("text");
const NewFormula = document.getElementById("newFormula");

let newFormula;

function btn_x2() {
  document.getElementById("newFormula").value = Text.value;
  console.log(Text.value);
}
