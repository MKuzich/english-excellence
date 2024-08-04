document.addEventListener('DOMContentLoaded', function () {
  function stepAnimateText(element, animation, delay) {
    const el = document.querySelector(element);
    const nodes = Array.from(el.childNodes);
    el.innerHTML = '';
    let totalDelay = 0;

    const animateNode = (node, parent) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const txt = node.textContent.replace(/\s+/g, ' ');
        for (let i = 0; i < txt.length; i++) {
          const character = txt.charAt(i);
          const span = document.createElement('span');
          span.className = animation;
          span.style.animationDelay = `${totalDelay}s`;
          span.textContent = character;
          parent.appendChild(span);
          totalDelay += delay;
        }
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const clonedNode = node.cloneNode();
        parent.appendChild(clonedNode);
        Array.from(node.childNodes).forEach(innerNode =>
          animateNode(innerNode, clonedNode)
        );
      }
    };

    nodes.forEach(node => animateNode(node, el));
  }

  stepAnimateText('.hero-title', 'customAppearing', 0.05);
});
