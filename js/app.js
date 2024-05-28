$(document).ready(function(){
  $('.flower-slider').slick({
    autoplay:true,
    slidesToShow:3,
    slideToScroll:1,
    prevArrow:".prev-btn",
    nextArrow:".next-btn",
    responsive:[
      {
        breakpoint:992,
        settings:{
        slidesToShow:2,

        }
      },
      {
        breakpoint:768,
        settings:{
        slidesToShow:1,
  
        },
      }
    ]
    
  });

  $('.nav-trigger').click(function(){
    $('.site-content-wrapper').toggleClass('scaled');
  })

  $('.nav-top a').click(function(){
    $('.site-content-wrapper').toggleClass('scaled');
  })
});