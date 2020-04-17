$(document).ready(function(){

    function ibg(){

    $.each($('.ibg'), function(index, val) {
    if($(this).find('img').length>0){
    $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
    }
    });
  }

    $('.slider__container').slick({
      arrows: false,
      dots: true,
    //   autoplay: true,
      autoplaySpeed: 2000
    });


    // function initMap() {
    //   var opt ={
    //     center: {lat: 40.781921, lng: -73.971980},
    //     zoom: 4
    //   }
    //   var map = new google.maps.Map(document.getElementById('map'), opt);
    // }


  });
