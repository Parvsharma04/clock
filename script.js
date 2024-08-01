const hour = document.querySelector(".hours");
const min = document.querySelector(".mins");
const sec = document.querySelector(".secs");
const title = document.querySelector("title");
const toggleBtn = document.querySelector("button");

let intervalId;

function render24Format() {
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  hours = hours < 10 ? "0" + hours : hours;

  hour.innerText = hours;
  min.innerText = minutes;
  sec.innerText = seconds;
  title.innerText = `${hours}:${minutes}:${seconds}`;
}

function render12Format() {
  let time = new Date();
  let hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const period = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;

  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
  const formattedHours = hours < 10 ? "0" + hours : hours;

  hour.innerText = formattedHours;
  min.innerText = formattedMinutes;
  sec.innerText = formattedSeconds;
  title.innerText = `${hours}:${formattedMinutes}:${formattedSeconds} ${period}`;
}

function toggleTimeMode(e) {
  const task = e.target.innerText;
  clearInterval(intervalId);

  if (task === "12 Hour Format") {
    intervalId = setInterval(render12Format, 1000);
    e.target.innerText = "24 Hour Format";
    console.log(intervalId)
} else {
    intervalId = setInterval(render24Format, 1000);
    e.target.innerText = "12 Hour Format";
    console.log(intervalId)
}
}

intervalId = setInterval(render24Format, 1000);
console.log(intervalId)
toggleBtn.addEventListener("click", toggleTimeMode);
