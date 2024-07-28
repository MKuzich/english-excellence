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

// const modal = document.querySelector('.js-modal');
const openBtn = document.querySelector('.js-open-btn');
const closeBtn = document.querySelector('.js-close-btn');

// const toggleModal = () => {
//   modal.classList.toggle('is-open');
// };

// openBtn.onclick = toggleModal;
// closeBtn.onclick = toggleModal;

const mobileMenuRefs = {
  mobileMenu: document.querySelector('.js-mobile-menu'),
  openMenuBtn: document.querySelector('.js-open-menu'),
  closeMenuBtn: document.querySelector('.js-close-menu'),
};

const toggleMenu = () => {
  const isMenuOpen =
    mobileMenuRefs.openMenuBtn.getAttribute('aria-expanded') === 'true' ||
    false;

  mobileMenuRefs.mobileMenu.classList.toggle('is-open');
  mobileMenuRefs.mobileMenu.setAttribute('aria-hidden', isMenuOpen);
  mobileMenuRefs.openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
};

console.log(mobileMenuRefs);

mobileMenuRefs.openMenuBtn.addEventListener('click', toggleMenu);
mobileMenuRefs.closeMenuBtn.addEventListener('click', toggleMenu);
