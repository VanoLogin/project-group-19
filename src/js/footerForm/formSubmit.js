const form = document.querySelector('.footer-form');
const input = document.querySelectorAll('input');

form.addEventListener('submit', onFormSabmit);

function onFormSabmit(e) {
  e.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.comments.value.trim();

  const data = {
    email,
    message,
  };

  const maxLength = input.offsetWidth / 10;

  if (message.length > maxLength) {
    input.value = message.substring(0, maxLength) + '...';
  }
}
console.log(data);
