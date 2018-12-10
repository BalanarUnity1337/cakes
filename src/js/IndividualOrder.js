import $ from 'jquery';

export default (function() {
  const $fillings = $('.fillings');
  const $sizes = $('.sizes');
  const $decorations = $('.decorations');
  const $fromYourChoice = $('.form--your-choice');
  const $fillingField = $fromYourChoice.find('[name="filling"]');
  const $sizeField = $fromYourChoice.find('[name="size"]');
  const $decorationField = $fromYourChoice.find('[name="decoration"]');

  // Fillings

  $fillings.on('click', '.filling__choose', function() {
    const $filling = $(this).parents('.filling');

    $filling
      .addClass('filling--selected')
      .siblings()
      .removeClass('filling--selected');

    $fillingField.val($filling.data('value'));
  });

  // -----
  // Sizes

  $sizes.on('click', '.size', function(e) {
    e.preventDefault();

    if ($(window).outerWidth() < 768) {
      return;
    }

    const $this = $(this);

    $this
      .addClass('size--selected')
      .siblings()
      .removeClass('size--selected');

    $sizeField.val($this.data('value'));
  });

  $sizes.on('click', '.size__choose', function() {
    const $size = $(this).parent();

    $size
      .addClass('size--selected')
      .siblings()
      .removeClass('size--selected');

    $sizeField.val($size.data('value'));
  });

  // -----------
  // Decorations

  $decorations.on('click', '.decoration', function(e) {
    e.preventDefault();

    if ($(window).outerWidth() < 768) {
      return;
    }

    const $this = $(this);

    $this
      .addClass('decoration--selected')
      .siblings()
      .removeClass('decoration--selected');

    $decorationField.val($this.data('value'));
  });

  $decorations.on('click', '.decoration__choose', function() {
    const $decoration = $(this).parents('.decoration');

    $decoration
      .addClass('decoration--selected')
      .siblings()
      .removeClass('decoration--selected');

    $decorationField.val($decoration.data('value'));
  });
})();
