$(document).ready(function() {

  $('.js-main-menu').hover(
    function() {
      $('.main').addClass("side-margin");
      $('.nav-text').removeClass("hidden");
    },
    function() {
      $('.main').removeClass("side-margin");
      $('.nav-text').addClass("hidden");
    }
  );

  $('.js-main-menu-item').hover(
    function() {
      $(this).find('.fa').addClass('white');
      $(this).find('.nav-text').addClass('white');
    },
    function() {
      $(this).find('.fa').removeClass('white');
      $(this).find('.nav-text').removeClass('white');
    }
  );
});
