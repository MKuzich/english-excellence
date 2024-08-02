function playOrPause() {
  if (!this.paused && !this.ended) {
        this.pause();
  } else {
        this.play();
    }
}
function loadVideo() {
  const videos = document.querySelectorAll('.teachers-video');
  videos.forEach((video) => {
    video.addEventListener('click', playOrPause, video);
  });
}
window.addEventListener('load',loadVideo,false);