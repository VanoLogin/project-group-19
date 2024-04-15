import { reviewsTemplate } from "../templates/templateReviews"
import Swiper from "swiper";
import { Navigation, Keyboard} from 'swiper/modules';
import 'swiper/css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css'; 

let reviewsSwiper;
const reviewsListElem = document.querySelector('.reviews-swiper-wrapper');
const prevButton = document.querySelector('.swiper-reviews-button-prev');
const nextButton = document.querySelector('.swiper-reviews-button-next');

initCardEditor();

import getReviews  from '../interfaces/interfaceHttp';


async function initCardEditor() {
    try {
        const result = await getReviews();
        const markUp = reviewsTemplate(result);
        reviewsListElem.insertAdjacentHTML('afterbegin', markUp);
        initSwiper()

        // Set the initial state of the "Prev" button depending on the slider position
        if (reviewsSwiper.isBeginning) {
            prevButton.classList.add('disabled');
            prevButton.setAttribute('aria-disabled', 'true');
            prevButton.removeEventListener('click', navigatePrev);
        } else {
            prevButton.classList.remove('disabled');
            prevButton.setAttribute('aria-disabled', 'false');
            prevButton.addEventListener('click', navigatePrev);
        }
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
    reviewsSwiper = new Swiper('.reviews-swiper', {
        modules: [Navigation, Keyboard],
        keyboard: { enabled: true },
        //Swapper parameters
        slidesPerView: 1,
        spaceBetween: 16,
        loop: false,

        navigation: {
            nextEl: ".swiper-reviews-button-next",
            prevEl: ".swiper-reviews-button-prev",
        },
        breakpoints: {
            375: {
                // slidesPerView: 1,
                width: 343,
            },
            768: {
                // slidesPerView: 2,
                width: 343,
            },
            1440: {
                // slidesPerView: 4,
                width: 332,
            }
        }
    });
    reviewsSwiper.on('slideChange', updateNavigationButtons);
}

function updateNavigationButtons() {
    // Check the current position of the slider
    if (reviewsSwiper.isBeginning) {
        // If the slider is on the first slide, tease out the "Prev" button
        prevButton.classList.add('disabled');
        prevButton.setAttribute('aria-disabled', 'true');
        prevButton.removeEventListener('click', navigatePrev); // Remove the click event handler
    } else {
        // If the slider is not on the first slide, remove the disable and enable the "Prev" button
        prevButton.classList.remove('disabled');
        prevButton.setAttribute('aria-disabled', 'false');
        prevButton.addEventListener('click', navigatePrev); // Add click event handler
    }

    if (reviewsSwiper.isEnd) {
        // If the slider is on the last slide, tease out the "Next" button
        nextButton.classList.add('disabled');
        nextButton.setAttribute('aria-disabled', 'true');
        nextButton.removeEventListener('click', navigateNext); // Remove the click event handler
    } else {
        // If the slider is not on the last slide, remove the disable and enable the "Next" button
        nextButton.classList.remove('disabled');
        nextButton.setAttribute('aria-disabled', 'false');
        nextButton.addEventListener('click', navigateNext); // Add click event handler
    }
}

function navigatePrev() {
    reviewsSwiper.slidePrev();
}

function navigateNext() {
    reviewsSwiper.slideNext();
}

window.addEventListener('keydown', tabNextSlide)


// Add Tab-button control
function tabNextSlide(e) {
    if (e.key == 'Tab') {
        reviewsSwiper.slideNext();
    }
}