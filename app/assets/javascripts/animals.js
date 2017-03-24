$(document).ready(function(){
  var offsets = [[40],[200], [80], [280], [30, 80], [160], [120], [80], [300], [40, 100], [20], [260], [100], [110] ];
  var animalColumns = $('.js-animals').children();
  $.each(animalColumns, function(index, animal) {
    var images = $(animal).children();
    $.each(images, function(subIndex, img) {
      $(img).css("margin-top", offsets[index][subIndex]);
    })
  })
});
