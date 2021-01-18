$(function(){

  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.thumbs',
    arrows: true,
    // fade: true,
  });

  $('.thumbs').slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    asNavFor: '.slider',
    focusOnSelect: true
  });

});