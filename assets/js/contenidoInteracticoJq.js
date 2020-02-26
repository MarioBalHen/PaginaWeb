//Actividad 1

$(document).ready(function(){
    $(".caja1").click(function(){ 
            alert( 'Hola');
        });
    $(".caja2").dblclick(function(){
            $(".caja2").hide();
        });
    $(".caja3").mouseenter(function(){
            $(".caja3").fadeOut(500);
        });
    $(".caja4").mouseleave(function(){
            $(".caja4").css("background","brown");
        });
    $(".caja5").hover(function(){
            $(".caja5").css("color", "yellow");
        },
        function(){
            $(".caja5").css("color", "orange");
        });
    $(".caja6").mousedown(function(){
        $(".caja6").html("pulsado");
         });
    $(".caja7").mousedown(function(){
        $(".caja7").html("soltado");
         });
}); 


//Actividad 2

$(document).ready(function(){
    $("#b1").click(function() { 
        $('.cajaA').slideUp(300);
        });
    
    $("#b2").click(function() { 
        $('.cajaA').slideDown(300);
        });

    $("#b3").click(function() { 
        $('.cajaA').slideToggle(300);
        });
   
    $("#b4").click(function() { 
        $('.cajaA').fadeOut(300);
        });
   
    $("#b5").click(function() { 
        $('.cajaA').bind("click mouseenter mouseleave", function(e){
            $(this).css("background", "rgb(0, 255, 0)"); 
        });
    });
    $("#b6").click(function() { 
        $(".cajaA").fadeIn(100);
        $(".cajaA").delay(800);
        $(".cajaA").fadeOut(800);
    });

    $("#b7").click(function() { 
        $(".cajaA").toggleClass("animacion");
    });
});

//Actividad 3

$(document).ready(function(){
    $("#bA").click(function() {
        $('.cajaB').animate({
        marginLeft: '+=100px'
        }, 300);
    });
    $("#bB").click(function() {
        $('.cajaB').animate({
        marginTop: '+=100px'
        }, 300);
    });
    $("#bC").click(function() {
        $('.cajaB').animate({
        padding: '+=50px'
        }, 300);
    });
    $("#bD").click(function() {
        $('.cajaB').animate({
        padding: '+=-50px'
        }, 300);
    });
    $("#bE").click(function() {
        $('.cajaB').animate({
        opacity: '+=0.1',
        }, 300);
    });
    $("#bF").click(function() {
        $('.cajaB').animate({
        opacity: '+=-0.1',
        }, 300);
    });
});

//Actividad 4

$(document).ready(function(){
    
    /*$("#bt1").click(function(){
        var posicion = $("#bt1").offset();
        $('html, body').animate({scrollTop:7800}, 'slow');
    });
    $("#bt2").click(function(){
        var posicion = $("#bt2").offset();
        $('html, body').animate({scrollTop:7430}, 'slow');
    });
    $("#bt3").click(function(){
        var posicion = $("#bt3").offset();
        $('html, body').animate({scrollTop:6720}, 'slow');
    });
    $("#bt4").click(function(){
        var posicion = $("#bt4").offset();
        $('html, body').animate({scrollTop:6150}, 'slow');
    });
    $("#bt5").click(function(){
        var posicion = $("#bt5").offset();
        $('html, body').animate({scrollTop:5470}, 'slow');
    });
    $("#bt6").click(function(){
        var posicion = $("#bt6").offset();
        $('html, body').animate({scrollTop:4965}, 'slow');
    });
    $("#bt7").click(function(){
        var posicion = $("#bt7").offset();
        $('html, body').animate({scrollTop:4750}, 'slow');
    });
    $("#bt8").click(function(){
        var posicion = $("#bt8").offset();
        $('html, body').animate({scrollTop:4145}, 'slow');
    });
    $("#bt9").click(function(){
        var posicion = $("#bt9").offset();
        $('html, body').animate({scrollTop:3920}, 'slow');
    });
    $("#bt10").click(function(){
        var posicion = $("#bt10").offset();
        $('html, body').animate({scrollTop:3630}, 'slow');
    });
    $("#bt11").click(function(){
        var posicion = $("#bt11").offset();
        $('html, body').animate({scrollTop:2980}, 'slow');
    });
    $("#bt12").click(function(){
        var posicion = $("#bt12").offset();
        $('html, body').animate({scrollTop:2330}, 'slow');
    });
    $("#bt13").click(function(){
        var posicion = $("#bt13").offset();
        $('html, body').animate({scrollTop:1150}, 'slow');
    });
    $("#bt14").click(function(){
        var posicion = $("#bt14").offset();
        $('html, body').animate({scrollTop:670}, 'slow');
    });
    /*$("#bt15").click(function(){
        var posicion = $("#bt15").offset();
        $('html, body').animate({scrollTop:165}, 'slow');
    });*/
    $('a[href^="#"]').click(function() {
        var destino = $(this.hash);
        if (destino.length == 0) {
          destino = $('a[name="' + this.hash.substr(1) + '"]');
        }
        if (destino.length == 0) {
          destino = $('html');
        }
        $('html, body').animate({ scrollTop: destino.offset().top -90 }, 'slow');
        return false;
      });
});

  //Actividad 5

  $(document).ready(function(){
    $("#toTop").css("display", "none");
       $(window).scroll(function(){
           if($(window).scrollTop() > 500){
               $("#toTop").fadeIn("slow");
           }
           else {
               $("#toTop").fadeOut("slow");
           }
       });
       $("#toTop").click(function(){
        var posicion = $("#toTop").offset();
        $('html, body').animate({scrollTop:0}, 'slow');
        });
   });

//Actividad 6

var x = true;
$('#trigger').on("click", function(e){
  e.preventDefault();
  if(x){
    $('nav').stop().slideToggle('fast');
    x = false;
  }else{
    $('nav').stop().slideToggle('fast', function(){
      $('nav').css('display','');
      x = true;
    })
  } 
});