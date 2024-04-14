import Swiper from "swiper";
import { Navigation, Keyboard} from 'swiper/modules';
import 'swiper/css';

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Keyboard],
    direction: 'horizontal',
    loop: false,  
    speed: 1000,

    navigation: {
      nextEl: '.project-swiper-btn-next',
      prevEl: '.project-swiper-btn-prev',
    },
  });