const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];
const btn = document.querySelector("#btn");

function btnClick() {
  var changeColor = colors[Math.floor(Math.random() * colors.length)];
  var changeColor2 = colors[Math.floor(Math.random() * colors.length)];
  var totalColor = `linear-gradient(to right, ${changeColor},${changeColor2})`;

  document.body.style.background = totalColor;
}

btn.addEventListener("click", btnClick);
