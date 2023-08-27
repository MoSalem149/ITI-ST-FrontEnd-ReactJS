const buttons = document.querySelectorAll(".video-button");
const videoPlayer = document.querySelector(".video-player");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const videoSrc = button.getAttribute("data-video");
    videoPlayer.src = videoSrc;
    videoPlayer.play();
  });
});

let isFullScreen = false;

videoPlayer.addEventListener("click", () => {
  if (!isFullScreen && !videoPlayer.paused) {
    videoPlayer.pause();
  }
});

videoPlayer.addEventListener("dblclick", () => {
  if (!isFullScreen) {
    requestFullscreen();
  }
});

function requestFullscreen() {
  if (videoPlayer.requestFullscreen) {
    videoPlayer.requestFullscreen();
  } else if (videoPlayer.mozRequestFullScreen) {
    videoPlayer.mozRequestFullScreen();
  } else if (videoPlayer.webkitRequestFullscreen) {
    videoPlayer.webkitRequestFullscreen();
  }
  isFullScreen = true;
}

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
  isFullScreen = false;
}

function rotateButton(button) {
  button.classList.add("rotate");
  setTimeout(() => {
    button.classList.remove("rotate");
  }, 1000);
}
