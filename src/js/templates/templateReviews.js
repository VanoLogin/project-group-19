function reviewTemplate(review) {
    return `<li class="swiper-slide">
                    <img class="review-person-photo" src="${review.avatar_url}" alt="Person photo">
                        <p class="review-person-name">${review.author}</p>
                        <p class="review-text">${review.review}</p>
                </li>`
}

export function reviewsTemplate(array) {
    return array.map(reviewTemplate).join('');
}