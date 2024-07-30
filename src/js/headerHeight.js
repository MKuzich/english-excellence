document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const headerHeight = header.offsetHeight;

  document.documentElement.style.setProperty(
    '--header-height',
    `${headerHeight}px`
  );

  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.style.paddingTop = `${headerHeight}px`;
  });
});