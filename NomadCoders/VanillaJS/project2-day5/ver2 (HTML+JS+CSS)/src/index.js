const bodyColor = document.querySelector("body");
console.log(bodyColor.className);
function handleResize() {
  const frame = window.innerWidth;

  if (frame >= 0 && frame <= 300) {
    bodyColor.className = "color1";
    console.log(bodyColor.className);
  } else if (frame >= 300 && frame <= 600) {
    bodyColor.className = "color2";
    console.log(bodyColor.className);
  } else if (frame >= 500 && frame <= 800) {
    bodyColor.className = "color3";
    console.log(bodyColor.className);
  }
}

window.addEventListener("resize", handleResize);
