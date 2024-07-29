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

const mobileMenuRefs = {
  mobileMenu: document.querySelector('.js-mobile-menu'),
  openMenuBtn: document.querySelector('.js-open-menu'),
  closeMenuBtn: document.querySelector('.js-close-menu'),
  backdrop: document.querySelector('.js-backdrop-menu'),
};

const toggleMenu = () => {
  const isMenuOpen =
    mobileMenuRefs.openMenuBtn.getAttribute('aria-expanded') === 'true' ||
    false;

  mobileMenuRefs.mobileMenu.classList.toggle('is-open');
  mobileMenuRefs.mobileMenu.setAttribute('aria-hidden', isMenuOpen);
  mobileMenuRefs.openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);

  mobileMenuRefs.backdrop.classList.toggle('is-visible');

  if (!isMenuOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

mobileMenuRefs.openMenuBtn.addEventListener('click', toggleMenu);
mobileMenuRefs.closeMenuBtn.addEventListener('click', toggleMenu);
mobileMenuRefs.backdrop.addEventListener('click', toggleMenu);

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-menu-item a');

  function setActiveLink() {
    navLinks.forEach(link => {
      link.classList.remove('active');
    });

    const activeLink = Array.from(navLinks).find(
      link => link.getAttribute('href') === window.location.hash
    );

    if (activeLink) {
      activeLink.classList.add('active');
    }
  }

  window.addEventListener('hashchange', setActiveLink);
  setActiveLink();
});
