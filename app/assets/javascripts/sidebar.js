$(document).ready(function() {

  $('.js-main-menu-triangle').mouseover(
    function() {
      $('.main').addClass("side-margin");
      $('.js-main-menu').removeClass("hidden");
      $('js-main-menu-triangle').addClass("hidden");
    }
  );
  $('.js-main-menu').mouseleave(
    function() {
      $('.main').removeClass("side-margin");
      $('.js-main-menu').addClass("hidden");
      $('js-main-menu-triangle').removeClass("hidden");
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
