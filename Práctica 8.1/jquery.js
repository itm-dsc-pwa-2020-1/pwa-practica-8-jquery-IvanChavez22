$(document).ready(function(){
    $("#claro").click(function(){
        $(".caja2").css("background","white");
    });
    $("#oscuro").click(function(){
        $(".caja2").css("background", "black");
    });
    $("#flip").click(function(){
        $("#panel").slideDown(5000);
      });
    $("#stop").click(function(){
        $("#panel").stop();
    });
    $("#animacion").click(function(){
        var div = $("#animacion2");  
        div.animate({left: '100px'}, "slow");
        div.animate({fontSize: '3em'}, "slow");
    });
 });
