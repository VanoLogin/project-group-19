import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';

const swiperProj = new Swiper('.projSwiper', {
  modules: [Navigation, Keyboard],
  slidesPerView: 1,
  spaceBetween: 68,
  centeredSlidesBounds: true,
  keyboard: {
    enabled: true,
  },
  clickable: true,
  navigation: {
    nextEl: '.swiper-projects-button-next',
    prevEl: '.swiper-projects-button-prev',
  },
});
