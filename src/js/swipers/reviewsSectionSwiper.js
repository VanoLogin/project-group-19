import axios from "axios";
import { reviewsTemplate } from "../templates/templateReviews"
import Swiper from "swiper";
import { Navigation, Keyboard} from 'swiper/modules';
import 'swiper/css';

let swiper;
const reviewsListElem = document.querySelector('.swiper-wrapper');
async function getReviews() {
    const url = 'https://portfolio-js.b.goit.study/api/reviews';
    const result = await axios.get(url);
    return result.data;
}

async function init() {
    try {
        const result = await getReviews();
        const markUp = reviewsTemplate(result);
        reviewsListElem.insertAdjacentHTML('afterbegin', markUp);
        initSwiper()
    } catch {
        // Change function
        console.log('Error!')
    }

}
init();


function initSwiper() {
    swiper = new Swiper('.swiper', {
        modules: [Navigation, Keyboard],
        keyboard: { enabled: true },
        // Default parameters
        slidesPerView: 1,
        spaceBetween: 16,
        width:343,
        loop: false,

        
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            // 768: {
            //     slidesPerView: 2,
            // },
            // // when window width is >= 640px
            1440: {
                // slidesPerView: 4,
                width: 332,
            }
        }
    })
}

window.addEventListener('keydown', callBack)

function callBack(e) {
    if (e.key == 'Tab') {
        console.log('hello');
        swiper.slideNext();
    }
}