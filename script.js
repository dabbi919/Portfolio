const swiper = new Swiper('.swiper', {
  loop: true,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // slidesPerView: 'auto',
  slideToClickedSlide: true,
});