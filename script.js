let timer;
let startTime;
let elapsedTime = 0;
let isRunning = false;

const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");
const lapsList = document.getElementById("laps");

function updateTime() {
  const now = Date.now();
  const time = new Date(now - startTime + elapsedTime);
  const minutes = String(time.getUTCMinutes()).padStart(2, "0");
  const seconds = String(time.getUTCSeconds()).padStart(2, "0");
  const milliseconds = String(Math.floor(time.getUTCMilliseconds() / 10)).padStart(2, "0");
  timeDisplay.textContent = `${minutes}:${seconds}:${milliseconds}`;
}

startBtn.onclick = () => {
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now();
    timer = setInterval(updateTime, 10);
  }
};

pauseBtn.onclick = () => {
  if (isRunning) {
    isRunning = false;
    clearInterval(timer);
    elapsedTime += Date.now() - startTime;
  }
};

resetBtn.onclick = () => {
  isRunning = false;
  clearInterval(timer);
  elapsedTime = 0;
  timeDisplay.textContent = "00:00:00";
  lapsList.innerHTML = "";
};

lapBtn.onclick = () => {
  if (isRunning) {
    const lapTime = timeDisplay.textContent;
    const lapItem = document.createElement("li");
    lapItem.textContent = `Lap: ${lapTime}`;
    lapsList.appendChild(lapItem);
  }
};
