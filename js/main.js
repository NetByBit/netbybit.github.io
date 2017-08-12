$(function () {
  'use strict';
  $(window).scroll(function () {
    var navbar = $('.navbar');
    $(window).scrollTop() >= navbar.height() ? navbar.addClass('scrolled') : navbar.removeClass('scrolled');
  });

  $(window).on('load', () => {
    $('.spinner-wrapper').fadeOut(500)
    $('.responsive_headline').addClass('animated rubberBand')
})

});
