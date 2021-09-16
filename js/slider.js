$(document).ready(function() {
    setInterval(slideItems, 2500);
});
  
function slideItems(){
    $("#slider-pic-wrap").animate({marginLeft: "-580px"}, 1000).delay(2500);
    
    $("#slider-pic-wrap").animate({marginLeft: "-1160px"}, 1000).delay(2500);
    
    $("#slider-pic-wrap").animate({marginLeft: "0px"}, 1000).delay(2500);
}