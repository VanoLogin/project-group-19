import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.footer-form');
const modal = document.querySelector('.footer-backdrop');
const btnCloseModal = document.querySelector('.modal-close-btn');

form.addEventListener('submit', onFormSabmit);

async function onFormSabmit(e) {
  e.preventDefault();

  const formData = new FormData(form);

  const emailInput = formData.get('email');
  const commentInput = formData.get('comments');

  // const maxLength = 100;
  // if (commentInput.length > maxLength) {
  //   return commentInput.substring(0, maxLength - 3) + '...';
  // } else {
  //   return commentInput;
  // }

  const data = {
    email: emailInput,
    comment: commentInput,
  };

  console.log(data);

  const url = 'https://portfolio-js.b.goit.study/api/requests';

  try {
    const response = await axios.post(url, data);
    modal.classList.add('is-open');
    form.reset();
    return response.data;
  } catch (error) {
    iziToast.error({
      color: 'red',
      message: '❌ Sorry, there is an error. Please try again later!',
      position: 'topRight',
    });
    console.log(error);
  }
}

btnCloseModal.addEventListener('click', () => {
  modal.classList.remove('is-open');
});
