import { Swiper, Pagination } from 'swiper/dist/js/swiper.esm.js';
import $ from 'jquery';

Swiper.use([Pagination]);

export default (function() {
  const currentFraction = $(
    '.slider-fraction--reviews .slider-fraction__current',
    '.reviews'
  );
  const totalFraction = $(
    '.slider-fraction--reviews .slider-fraction__total',
    '.reviews'
  );

  let slider = new Swiper('.reviews__inner', {
    speed: 700,
    containerModifierClass: 'reviews__inner--',
    slideClass: 'review',
    slideActiveClass: 'review--active',
    slidePrevClass: 'review--prev',
    slideNextClass: 'review--next',
    wrapperClass: 'reviews__items',
    pagination: {
      el: '.slider-pagination--reviews',
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
      prevEl: '.slider-navigation--reviews.slider-navigation--prev',
      nextEl: '.slider-navigation--reviews.slider-navigation--next',
      disabledClass: 'slider-navigation--disabled'
    },
    breakpointsInverse: true,
    breakpoints: {
      320: {
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
