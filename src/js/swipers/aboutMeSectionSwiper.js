import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
// import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

let parametrs = {
  modules: [Navigation],
  slidesPerView: 1,
  lazy: true,
  loop: true,
  centeredSlides: false,
  direction: 'horizontal',
  spaceBetween: 0,
  initialSlide: 1,
  navigation: {
    nextEl: '.about-me-swiper-btn-next',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    // 480: {
    //   slidesPerView: 2,
    //   spaceBetween: 1,
    // },
    // when window width is >= 640px
    500: {
      slidesPerView: 3,
    },
    700: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
    1280: {
      slidesPerView: 5,
    },
    1310: {
      slidesPerView: 'auto',
    },
  },
};

new Swiper('.about-me-swiper-container', parametrs);

new Accordion('.accordion-container', {
  duration: 600,
  showMultiple: false,
  openOnInit: [0],
});
