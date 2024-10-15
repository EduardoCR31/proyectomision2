const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    allowTouchMove: true,
    effect: 'cube',
    autoplay: {
        delay:2000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
    },
    

    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    //  scrollbar: {
    //  el: '.swiper-scrollbar',
    //  },
});