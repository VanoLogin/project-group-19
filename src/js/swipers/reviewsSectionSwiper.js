import axios from "axios";
import { reviewsTemplate } from "../templates/templateReviews"
import Swiper from "swiper";
import 'swiper/css';

const reviewsListElem = document.querySelector('.swiper-wrapper');
async function getReviews() {
    const url = 'https://portfolio-js.b.goit.study/api/reviews';
    const result = await axios.get(url);
    return result.data;
}

async function init() {
    const result = await getReviews();
    const markUp = reviewsTemplate(result);
    reviewsListElem.insertAdjacentHTML('afterbegin', markUp);
    initSwiper()
}
init();


function initSwiper() {
    const swiper = new Swiper('.swiper', {
        // Default parameters
        slidesPerView: 1,
        spaceBetween: 16,
        width: 343,
        loop: false,
        
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    })
}

