import GenericSwiper from "./slider.js";

// 基本的なスライダー
const slider = new GenericSwiper(".mySwiper");

// カスタムオプションを持つスライダー
const slider2 = new GenericSwiper(".mySwiper2", {
  slidesPerView: 2,
  spaceBetween: 20,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// 3Dエフェクト付きスライダー
const slider3D = new GenericSwiper(".mySwiper3D", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// サムネイル付きスライダー
const thumbsSwiper = new GenericSwiper(".mySwiperThumbsGallery", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

const mainSwiper = new GenericSwiper(".mySwiperThumbs", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: thumbsSwiper.getSwiper(),
  },
});

// フリーモードスライダー
const freeSwiper = new GenericSwiper(".mySwiperFree", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  freeMode: true,
  freeModeMomentum: true,
  freeModeMomentumRatio: 0.25,
  freeModeMomentumVelocityRatio: 0.25,
  freeModeSticky: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
