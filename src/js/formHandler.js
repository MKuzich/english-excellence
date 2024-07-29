const form = document.querySelector('.contact-form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  console.log(data);
  const notification = document.querySelector('.notification');
  const notificationTitle = document.querySelector('.notification-title');
  const notificationMain = document.querySelector('.notification-main');

  notification.classList.remove('hidden');
  const title = `Dear ${data['user-name']}!`;
  const content = `We are happy that you chose <strong>${data.teacher}</strong> at English Excellence. We will inform you via your email <strong>${data['user-email']}</strong> or your phone <strong>${data['user-phone']}</strong>. Your comment: <strong>"${data['user-comment']}"</strong> has been received.`;

  notificationTitle.textContent = title;
  notificationMain.innerHTML = content;
  notification.classList.add('animate-notification');
  setTimeout(() => {
    notification.classList.add('hidden');
    notification.classList.remove('animate-notification');
  }, 5000);

  form.reset();
});
