class GenericSwiper {
  constructor(selector, customOptions = {}) {
    if (!selector) {
      throw new Error("Selector is required");
    }

    this.slider = document.querySelector(selector);
    if (!this.slider) {
      throw new Error(`Element with selector "${selector}" not found`);
    }

    // デフォルトのオプション
    const defaultOptions = {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    };

    // カスタムオプションとデフォルトオプションをマージ
    const options = this.mergeOptions(defaultOptions, customOptions);

    // Swiperの初期化
    this.swiper = new Swiper(this.slider, options);
  }

  // オプションをマージするヘルパーメソッド
  mergeOptions(defaultOptions, customOptions) {
    return {
      ...defaultOptions,
      ...customOptions,
      pagination: {
        ...defaultOptions.pagination,
        ...(customOptions.pagination || {}),
      },
      navigation: {
        ...defaultOptions.navigation,
        ...(customOptions.navigation || {}),
      },
      autoplay: {
        ...defaultOptions.autoplay,
        ...(customOptions.autoplay || {}),
      },
    };
  }

  // Swiperインスタンスを取得するメソッド
  getSwiper() {
    return this.swiper;
  }

  // スライダーを更新するメソッド
  update() {
    this.swiper.update();
  }
}

export default GenericSwiper;
