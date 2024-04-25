import SwiperAbout from 'swiper';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';

new Accordion('.accordion-container', {
  duration: 600,
  showMultiple: false,
  openOnInit: [0],
});

let parametrs = {
  modules: [Navigation, Mousewheel, Keyboard],
  slidesPerView: 2,
  lazy: true,
  loop: true,
  centeredSlides: false,
  direction: 'horizontal',
  mousewheel: true,
  keyboard: true,
  spaceBetween: 0,
  initialSlide: 1,

  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },

  navigation: {
    nextEl: '.about-me-swiper-btn-next',
  },
};

new SwiperAbout('.about-me-swiper-container', parametrs);
