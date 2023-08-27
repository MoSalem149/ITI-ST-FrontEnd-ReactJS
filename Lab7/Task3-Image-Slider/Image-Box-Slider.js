var images = [
  "Images/1.jpg",
  "Images/2.jpg",
  "Images/3.jpg",
  "Images/4.jpg",
  "Images/5.jpg",
  "Images/6.jpg",
  "Images/7.jpg",
  "Images/8.jpg",
];
var currentIndex = 0;
var intervalId;

var imageElement = image;
var startButton = start;
var pauseButton = pause;

function showImage(index) {
  imageElement.src = images[index];
}

function startInterval() {
  intervalId = setInterval(function () {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }, 1000);
}

function startButtonClicked() {
  startButton.disabled = true;
  pauseButton.disabled = false;
  startInterval();
}

function pauseButtonClicked() {
  startButton.disabled = false;
  pauseButton.disabled = true;
  clearInterval(intervalId);
}

function prevButtonClicked() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

function nextButtonClicked() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

showImage(currentIndex);
