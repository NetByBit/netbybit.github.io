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

  // smooth scroll
  $('.navbar-right li a').click(function () {
    $('html, body').animate({
      scrollTop: $('#' + $(this).data('value')).offset().top
    }, 1000);
  });

});
