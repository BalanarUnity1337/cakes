import $ from 'jquery';

export default (function() {
  const $overlay = $('.overlay');
  let onCloseOverlay = null;

  $overlay.click(function() {
    closeOverlay();
  });

  function showOverlay(callback) {
    $overlay.addClass('active');

    onCloseOverlay = callback;
  }

  function closeOverlay() {
    $overlay.removeClass('active');

    if (typeof onCloseOverlay === 'function') {
      onCloseOverlay();
    }
  }

  return {
    show: onCloseOverlay => showOverlay(onCloseOverlay),
    close: closeOverlay
  };
})();
