import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.swiper', {
    modules: [Autoplay],
    loop: true,
    spaceBetween: 32,
    slidesPerView: 1,
    grabCursor: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1280: {
        slidesPerView: 3,
      },
    },
  });
});

let options = {
  threshold: 1,
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
