const clockTitle = document.querySelector(".js-clock");

function getDate() {
  const xmasEve = new Date("2022-12-24:00:00:00+0900");
  const today = new Date();
  const gap = xmasEve - today;

  const day = String(Math.floor(gap / 1000 / 60 / 60 / 24)).padStart(3, "0");
  const hours = String(Math.floor(gap / 1000 / 60 / 60) % 24).padStart(2, "0");
  const minutes = String(Math.floor(gap / 1000 / 60 / 60) % 60).padStart(
    2,
    "0"
  );
  const seconds = String(Math.floor(gap / 1000) % 60).padStart(2, "0");
  clockTitle.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}

getDate();
setInterval(getDate, 1000);
