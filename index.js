import GenericSwiper from "./slider.js";

const newsSlider = new GenericSwiper(".js-newsSlider", {
  slidesPerView: 4,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
