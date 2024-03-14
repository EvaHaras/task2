$(document).ready(function(){
    $('.carousel').slick({
      
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true, 
      autoplaySpeed: 3000, 
      arrows: false,
      responsive: [
        {
          breakpoint: 1054, 
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 662, 
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
  });
  