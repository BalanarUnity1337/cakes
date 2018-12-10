import { Swiper, Pagination } from 'swiper/dist/js/swiper.esm.js';
import $ from 'jquery';

Swiper.use([Pagination]);

export default (function() {
  const currentFraction = $(
    '.slider-fraction--decorations .slider-fraction__current',
    '.order-steps__step--decorating'
  );
  const totalFraction = $(
    '.slider-fraction--decorations .slider-fraction__total',
    '.order-steps__step--decorating'
  );

  let slider = new Swiper('.decorations__inner', {
    speed: 700,
    containerModifierClass: 'decorations__inner--',
    slideClass: 'decoration',
    slideActiveClass: 'decoration--active',
    slidePrevClass: 'decoration--prev',
    slideNextClass: 'decoration--next',
    wrapperClass: 'decorations__items',
    pagination: {
      el: '.slider-pagination--decorations',
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
      prevEl: '.slider-navigation--decorations.slider-navigation--prev',
      nextEl: '.slider-navigation--decorations.slider-navigation--next',
      disabledClass: 'slider-navigation--disabled'
    },
    breakpointsInverse: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 25
      }
    },
    on: {
      init: function() {
        totalFraction.text(this.slides.length);

        if ($(window).outerWidth() < 768) {
          currentFraction.text(this.activeIndex + 1);
        } else {
          currentFraction.text(this.activeIndex + 2);
        }
      },
      slideChange: function() {
        currentFraction.text(this.activeIndex + 2);

        if ($(window).outerWidth() < 768) {
          currentFraction.text(this.activeIndex + 1);
        } else {
          currentFraction.text(this.activeIndex + 2);
        }
      },
      resize: function() {
        if ($(window).outerWidth() < 768) {
          currentFraction.text(this.activeIndex + 1);
        } else if ($(window).outerWidth() >= 768) {
          currentFraction.text(this.activeIndex + 2);
        }
      }
    }
  });
})();
