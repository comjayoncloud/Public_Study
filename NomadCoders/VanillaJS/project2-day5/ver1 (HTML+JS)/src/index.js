const h2 = document.querySelector("h2");
const bodyColor = document.querySelector("body");

function handleResize() {
  var frame = window.innerWidth;

  if (frame >= 0 && frame <= 300) {
    bodyColor.style.backgroundColor = "blue";
    h2.style.color = "white";
  } else if (frame >= 300 && frame <= 600) {
    bodyColor.style.backgroundColor = "purple";
    h2.style.color = "white";
  } else if (frame >= 500 && frame <= 800) {
    bodyColor.style.backgroundColor = "yellow";
    h2.style.color = "white";
  }
}

window.addEventListener("resize", handleResize);
