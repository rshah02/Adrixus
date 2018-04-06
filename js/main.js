$j(document).ready(function() {
    $j('.clientSayList').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
     $j('.portfolioList').slick({
        infinite: false,
      
       slidesToShow: 3,
         prevArrow:'<div class="slick-prev"><button type="button" class="triangle"></button></div>',  
         nextArrow:'<div class="slick-next"><button type="button" class="triangle"></button></div>',
        slidesToScroll: 1
    });
    
});