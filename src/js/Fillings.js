import { Swiper, Pagination, Navigation } from 'swiper/dist/js/swiper.esm.js';
import $ from 'jquery';

Swiper.use([Pagination, Navigation]);

export default (function() {
  const currentFraction = $(
    '.slider-fraction--fillings .slider-fraction__current',
    '.order-steps__step--fillings'
  );
  const totalFraction = $(
    '.slider-fraction--fillings .slider-fraction__total',
    '.order-steps__step--fillings'
  );

  let slider = new Swiper('.fillings__inner', {
    speed: 700,
    containerModifierClass: 'fillings__inner--',
    slideClass: 'filling',
    slideActiveClass: 'filling--active',
    slidePrevClass: 'filling--prev',
    slideNextClass: 'filling--next',
    wrapperClass: 'fillings__items',
    pagination: {
      el: '.slider-pagination--fillings',
      type: 'bullets',
      bulletElement: 'button',
      dynamicBullets: true,
      dynamicMainBullets: 3,
      clickable: true,
      bulletClass: 'slider-pagination__item',
      bulletActiveClass: 'slider-pagination__item--active',
      modifierClass: 'slider-pagination--',
      clickableClass: 'slider-pagination--clickable'
    },
    navigation: {
      nextEl: '.slider-navigation.slider-navigation--next',
      prevEl: '.slider-navigation.slider-navigation--prev',
      disabledClass: 'slider-navigation--disabled'
    },
    breakpointsInverse: true,
    breakpoints: {
      320: {
        spaceBetween: 30
      },
      768: {
        // width: 440,
        spaceBetween: 30
      }
    },
    on: {
      init: function() {
        totalFraction.text(this.slides.length);
        currentFraction.text(this.activeIndex + 1);
      },
      slideChange: function() {
        currentFraction.text(this.activeIndex + 1);
      }
    }
  });
})();
