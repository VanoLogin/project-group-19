const form = document.querySelector('.footer-form');

form.addEventListener('submit', onFormSabmit);

function onFormSabmit(e) {
  e.preventDefault();

  const formData = new FormData(form);

  const emailInput = formData.get('email');
  const commentInput = formData.get('comments');

  const data = {
    email: emailInput,
    message: commentInput,
  };

  console.log(data);
}
