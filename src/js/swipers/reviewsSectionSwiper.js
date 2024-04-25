import { reviewsTemplate } from '../templates/templateReviews';
import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let reviewsSwiper;
const reviewsListElem = document.querySelector('.reviews-swiper-wrapper');

initCardEditor();

import getReviews from '../interfaces/interfaceHttp';

async function initCardEditor() {
  try {
    const result = await getReviews();
    const markUp = reviewsTemplate(result);
    reviewsListElem.insertAdjacentHTML('afterbegin', markUp);
    initSwiper();

  } catch {
    iziToast.error({
      position: 'topCenter',
      title: 'Error',
      message: 'Not found',
    });
    reviewsListElem.innerHTML = '<p class="not-found-message">Not found</p>';
  }
}

function initSwiper() {
  const reviewsSwiper = new Swiper('.reviews-swiper', {
    //Swapper parameters
    modules: [Navigation, Keyboard],
    keyboard: { enabled: ue },
    autoHeight: true,
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,

    navigation: {
      nextEl: '.swiper-reviews-button-next',
      prevEl: '.swiper-reviews-button-prev',
    },
    breakpoints: {
      375: {
        slidesPerView: 1,
        // width: 343,
      },
      768: {
        slidesPerView: 2,
        // width: 343,
      },
      1440: {
        slidesPerView: 4,
        // width: 332,
      },
    },
  });
}

window.addEventListener('keydown', tabNextSlide);

// Add Tab-button control
function tabNextSlide(e) {
  if (e.key == 'Tab') {
    reviewsSwiper.slideNext();
  }
}
