import axios from 'axios';

const form = document.querySelector('.footer-form');

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
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
