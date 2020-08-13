var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("random");

function randomColor1() {
  var x = Math.floor(Math.random() * 255);
  var y = Math.floor(Math.random() * 255);
  var z = Math.floor(Math.random() * 255);
  var bgColor = "rgb(" + x + ", " + y + ", " + z + ")";
  return bgColor;
}

function randomColor2() {
  var x = Math.floor(Math.random() * 255);
  var y = Math.floor(Math.random() * 255);
  var z = Math.floor(Math.random() * 255);
  var bgColor = "rgb(" + x + ", " + y + ", " + z + ")";
  return bgColor;
}

function randomBackground() {
  body.style.background =
    "linear-gradient(to right, " + randomColor1() + ", " + randomColor2() + ")";
  css.textContent = body.style.background + ";";
}

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomBtn.addEventListener("click", randomBackground);
