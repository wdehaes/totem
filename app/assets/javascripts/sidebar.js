$(document).ready(function() {
  $('.main-menu').hover(
    function() {
      $('.main').addClass("side-margin");
    },
    function() {
      $('.main').removeClass("side-margin");
    }

    );
});
