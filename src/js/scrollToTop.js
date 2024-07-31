document.addEventListener('scroll', function () {
  const anchor = document.querySelector('.hero-link-circle');
  if (window.scrollY === 0) {
    anchor.style.transform = 'rotate(0deg)';
    anchor.href = '#footer-section';
  } else {
    anchor.style.transform = 'rotate(180deg)';
    anchor.href = '#hero-section';
  }
});
