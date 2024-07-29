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
