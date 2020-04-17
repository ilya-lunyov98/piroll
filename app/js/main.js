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


    $('.slider-slider__wrapper').slick({
      arrows: true,
      dots: false,
      autoplaySpeed: 2000,
      nextArrow:'<button type="button" class="slick-next">NEXT PROJECT</button>',
      prevArrow:'<button type="button" class="slick-prev">PREVIOUS PROJECT</button>'

     
    });




  });
