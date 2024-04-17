import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.project-swiper', {
  loop: false,
  speed: 1000,

  keyboard: {
    enabled: true,
},

  navigation: {
    nextEl: '.project-swiper-button-next',
    prevEl: '.project-swiper-button-prev',
  },

});