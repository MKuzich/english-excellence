function animateNumber(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

function setupNumberAnimation(targetSelector) {
    const target = document.querySelector(targetSelector);
    if (!target) return;

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumber(target, 500, parseInt(target.textContent, 10), 1000);
                observer.disconnect();
            }
        });
    }, { threshold: 0.1 });

    observer.observe(target);
}

document.addEventListener('DOMContentLoaded', () => {
    setupNumberAnimation('.contact-promo-title');
});