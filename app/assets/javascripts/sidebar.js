$(document).ready(function() {

  $('.main-menu').hover(
    function() {
      $('.main').addClass("side-margin");
      $('.nav-text').removeClass("hidden");
    },
    function() {
      $('.main').removeClass("side-margin");
      $('.nav-text').addClass("hidden");
    }

    );
});
