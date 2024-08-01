let options = {
  threshold: 0.4,
};
const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('start');
    } else {
      entry.target.classList.remove('start');
    }
  });
};
let observer = new IntersectionObserver(callback, options);
const ctaContainer = document.querySelector('.usp-wrapper');

if (ctaContainer) {
  observer.observe(ctaContainer);
}
