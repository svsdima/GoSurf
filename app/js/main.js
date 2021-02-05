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
  
});