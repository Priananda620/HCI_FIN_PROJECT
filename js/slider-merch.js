$(document).ready(function() {
    setInterval(slideItems, 2500);
});
//berbeda dengan yang di index: $('#slider-pic-wrap').width() agar pas dengan gambar. /3 karena gambar ada 3. *2 karena pada gambar ke 2, margin 2 kali width gambar.
function slideItems(){
    $("#slider-pic-wrap").animate({marginLeft: "-"+($('#slider-pic-wrap').width())/3}, 500).delay(2500);
    
    $("#slider-pic-wrap").animate({marginLeft: "-"+($('#slider-pic-wrap').width()/3)*2}, 500).delay(2500);
    
    $("#slider-pic-wrap").animate({marginLeft: "0px"}, 500).delay(2500);
}

// $("#slider-pic-wrap").animate({marginLeft: "-"+($( window ).width())}, 500).delay(2500);