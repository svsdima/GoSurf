/* Слайды */
$(function(){

$('.header__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="arrows-left"></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="arrows-right"></img>',
    asNavFor: '.slider-dots',
});

$('.slider-dots').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider',
    arrows: false,
});

$('.surf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="arrows-left"></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="arrows-right"></img>',
    asNavFor: '.slider-map',
});

$('.slider-map').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.surf-slider',
    focusOnSelect: true,
});

$('.holder__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="arrows-left"></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="arrows-right"></img>',
});

/* Инпуты */
$('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/sleep/plus.svg" alt="plus"></div><div class="quantity-button quantity-down"><img src="img/sleep/minus.svg" alt="minus"></div></div>').insertAfter('.quantity input');
$('.quantity').each(function() {
  var spinner = $(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.quantity-up'),
    btnDown = spinner.find('.quantity-down'),
    min = input.attr('min'),
    max = input.attr('max');

  btnUp.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

  btnDown.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

});

/* Расчёт стоимости отеля */

$('.quantity-button').on('click', function () {
    let parents = $(this).parents('.holder-slider__info');
    let summ = $('.nights', parents).val() * $('.summ', parents).data('guests') * $('.guests', parents).val();
    $('.summ', parents).html('$' + summ);
});

$('.quantity').each(function () {
    let parents = $(this).parents('.holder-slider__info');
    let summ = $('.nights', parents).val() * $('.summ', parents).data('guests') * $('.guests', parents).val();
    $('.summ', parents).html('$' + summ);
});

});

