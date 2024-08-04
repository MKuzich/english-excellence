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

const navLinks = document.querySelectorAll('.nav-menu-item a');
function setActiveLink(val) {
  navLinks.forEach(link => {
    link.classList.remove('active');
  });

  const activeLink = Array.from(navLinks).find(
    link => link.getAttribute('href') === val
  );

  if (activeLink) {
    activeLink.classList.add('active');
  }
}

const handleIntersection = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setActiveLink(`#${entry.target.id}`);
    }
  });
};

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};

const observer = new IntersectionObserver(handleIntersection, options);
const sections = document.querySelectorAll('section');

const deleteSectionsObserver = () =>
  sections.forEach(section => {
    observer.unobserve(section);
  });

const addSectionsObserver = () =>
  sections.forEach(section => {
    observer.observe(section);
  });

addSectionsObserver();

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('hashchange', () => {
    deleteSectionsObserver();
    setActiveLink(window.location.hash);
    setTimeout(() => {
      addSectionsObserver();
    }, 750);
  });
  setActiveLink(window.location.hash);
});
