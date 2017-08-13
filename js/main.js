$(function () {
  'use strict';
  $(window).scroll(function () {
    var navbar = $('.navbar');
    $(window).scrollTop() >= navbar.height() ? navbar.addClass('scrolled') : navbar.removeClass('scrolled');
  });

  $(window).on("load", function () {
    $('.spinner-wrapper').fadeOut(500);
  })

  // // smooth scroll
  $('.navbar li a').click(function () {
    $('html, body').animate({
      scrollTop: $('#' + $(this).data('value')).offset().top
    }, 1000);
  });

});
