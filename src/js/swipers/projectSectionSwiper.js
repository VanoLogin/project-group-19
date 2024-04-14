const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: false,  
    speed: 2000,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay:5000,
    }
  });