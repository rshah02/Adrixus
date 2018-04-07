$j(document).ready(function() {
    $j('.clientSayList').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
                 prevArrow:'<div class="slick-slider slick-prev"><span type="button" class="prev"></span></div>',  
         nextArrow:'<div class="slick-slider slick-next"><span type="button" class="next"></span></div>',

    });
     $j('.portfolioList').slick({
        infinite: false,
      
       slidesToShow: 3,
         prevArrow:'<div class="slick-slider slick-prev"><span type="button" class="prev"></span></div>',  
         nextArrow:'<div class="slick-slider slick-next"><span type="button" class="next"></span></div>',
        slidesToScroll: 1,
         responsive: [
  {
    breakpoint: 1024,
    settings: {
        slidesToShow:1
    }
  }
 
  ]
    });
    
});