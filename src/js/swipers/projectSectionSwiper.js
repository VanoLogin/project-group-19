import Swiper from 'swiper';
import 'swiper/css';

const swiper = new Swiper('.project-swiper', {
  loop: false,
  speed: 1000,
  grabCursor: true,
  spaceBetween: 60, 

  keyboard: {
    enabled: true,
},

  navigation: {
    nextEl: '.project-swiper-button-next',
    prevEl: '.project-swiper-button-prev',
  },



});