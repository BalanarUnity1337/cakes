import { Swiper, Pagination } from 'swiper/dist/js/swiper.esm.js';
import $ from 'jquery';

export default (function() {
  let isInit = false;

  let slider = new Swiper('.sizes__inner', {
    speed: 700,
    containerModifierClass: 'sizes__inner--',
    slideClass: 'size',
    slideActiveClass: 'size--active',
    slidePrevClass: 'size--prev',
    slideNextClass: 'size--next',
    wrapperClass: 'sizes__items',
    pagination: {
      el: '.slider-pagination--sizes',
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
    breakpointsInverse: true,
    breakpoints: {
      320: {
        spaceBetween: 30
      }
    },
    on: {
      init: function() {
        isInit = true;
      }
    }
  });

  $(window).on('resize', function() {
    const currentWindowWidth = $(window).outerWidth();

    if (currentWindowWidth >= 768 && isInit) {
      slider.destroy(false, true);
      isInit = false;
    } else if (currentWindowWidth < 768 && !isInit) {
      slider.destroyed = false;
      slider.init();
      slider.pagination.init();
      slider.pagination.update();
      slider.update();
      isInit = true;
    }
  });

  $(window).trigger('resize');
})();
