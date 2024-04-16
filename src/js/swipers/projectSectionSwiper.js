
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.project-swiper', {
  loop: false,

  navigation: {
    nextEl: '.project-swiper-button-next',
    prevEl: '.project-swiper-button-prev',
  },

});