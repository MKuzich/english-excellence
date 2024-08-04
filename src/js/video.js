function playOrPause() {
  if (!this.paused && !this.ended) {
    this.pause();
  } else {
    this.play();
  }
}
function loadVideo() {
  const videos = document.querySelectorAll('.teachers-video');
  videos.forEach(video => {
    video.addEventListener('click', playOrPause, video);
  });
  const removeCircleAnimation = e => {
    e.target.parentElement
      .querySelector('.circle')
      .classList.add('visually-hidden');
    e.target.removeEventListener('click', removeCircleAnimation);
  };
  videos.forEach(video => {
    video.addEventListener('play', removeCircleAnimation);
  });
}
window.addEventListener('load', loadVideo, false);
