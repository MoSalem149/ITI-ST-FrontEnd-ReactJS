var startTime = 0;
var intervalId = null;
var running = false;

var displayElement = document.getElementById("display");
var startStopButton = document.getElementById("startStopButton");

function updateTime(displayElement) {
  var currentTime = new Date().getTime();
  var elapsedTime = currentTime - startTime;
  var formattedTime = formatTime(elapsedTime);
  displayElement.textContent = formattedTime;
}

function formatTime(milliseconds) {
  var totalSeconds = Math.floor(milliseconds / 1000);
  var hours = Math.floor(totalSeconds / 3600);
  var minutes = Math.floor((totalSeconds % 3600) / 60);
  var seconds = totalSeconds % 60;
  return pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
}

function pad(number) {
  return String(number).padStart(2, "0");
}

function startStop() {
  if (running) {
    clearInterval(intervalId);
    startStopButton.textContent = "Start";
  } else {
    startTime = new Date().getTime() - (startTime ? startTime : 0);
    intervalId = setInterval(function () {
      updateTime(displayElement);
    }, 1000);
    startStopButton.textContent = "Pause";
  }
  running = !running;
}

function clearTimer() {
  clearInterval(intervalId);
  startStopButton.textContent = "Start";
  startTime = 0;
  displayElement.textContent = "00:00:00";
  running = false;
}
