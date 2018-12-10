import $ from 'jquery';
import overlay from './Overlay.js';

export default (function() {
  const $openMenu = $('.js-open-menu');
  const $mainMenu = $('.js-main-menu');

  $openMenu.click(() => {
    if (!$mainMenu.hasClass('active')) {
      openMenu();

      overlay.show(closeMenu);
    } else {
      closeMenu();

      overlay.close();
    }
  });

  function openMenu() {
    $openMenu.addClass('is-active');

    $mainMenu
      .one('animationend', () => {
        $mainMenu.removeClass('bounceInUp');
      })
      .addClass('bounceInUp  active');
  }

  function closeMenu() {
    $openMenu.removeClass('is-active');

    $mainMenu
      .one('animationend', () => {
        $mainMenu.removeClass('bounceOutDown active');
      })
      .addClass('bounceOutDown');
  }
})();
