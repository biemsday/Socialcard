$(document).ready(function(){
    
      $("a").on('click', function(e) {
         e.preventDefault();
         
         var 
            href = $(this).attr('href'),
            timeout = 1000;
            
         setTimeout(function() {
            window.open(href, '_blank');
          }, timeout);
         
      });  

    $(".vk").on({
            mouseenter: function(){
                $("body").css("background-color", "#507299");
                $(".vk").addClass("active");
                $(".fb, .ig, .tg, .gh, .tw, .gmail, .phone").addClass("passive")

            },  
            mouseleave: function(){
                $("body").css("background-color", "#5296A5");
                $(".vk").removeClass("active");
                $(".fb, .ig, .tg, .gh, .tw, .gmail, .phone").removeClass("passive")
            } 
    });

    $(".fb").on({
            mouseenter: function(){
                $("body").css("background-color", "#4267B2");
                $(".fb").addClass("active");
                $(".vk, .ig, .tg, .gh, .tw, .gmail, .phone").addClass("passive")
            },  
            mouseleave: function(){
                $("body").css("background-color", "#5296A5");
                $(".fb").removeClass("active");
                $(".vk, .ig, .tg, .gh, .tw, .gmail, .phone").removeClass("passive")
            } 
    });

    $(".ig").on({
            mouseenter: function(){
                $("body").css("background-color", "#FFFFFF");
                $(".ig").addClass("active_phone");
                $(".vk, .fb, .tg, .gh, .tw, .gmail, .phone").addClass("passive")
            },  
            mouseleave: function(){
                $("body").css("background-color", "#5296A5");
                $(".ig").removeClass("active_phone");
                $(".vk, .fb, .tg, .gh, .tw, .gmail, .phone").removeClass("passive")
            } 
    });

    $(".tg").on({
            mouseenter: function(){
                $("body").css("background-color", "#32AFED");
                $(".tg").addClass("active");
                $(".vk, .fb, .ig, .gh, .tw, .gmail, .phone").addClass("passive")
            },  
            mouseleave: function(){
                $("body").css("background-color", "#5296A5");
                $(".tg").removeClass("active");
                $(".vk, .fb, .ig, .gh, .tw, .gmail, .phone").removeClass("passive")
            } 
    });

    $(".gh").on({
            mouseenter: function(){
                $("body").css("background-color", "#24292E");
                $(".gh").addClass("active");
                $(".vk, .fb, .ig, .tg, .tw, .gmail, .phone").addClass("passive")
            },  
            mouseleave: function(){
                $("body").css("background-color", "#5296A5");
                $(".gh").removeClass("active");
                $(".vk, .fb, .ig, .tg, .tw, .gmail, .phone").removeClass("passive")
            } 
    });

    $(".tw").on({
            mouseenter: function(){
                $("body").css("background-color", "#FFFFFF");
                $(".tw").addClass("active_tw");
                $(".vk, .fb, .ig, .tg, .gh, .gmail, .phone").addClass("passive")
            },  
            mouseleave: function(){
                $("body").css("background-color", "#5296A5");
                $(".tw").removeClass("active_tw");
                $(".vk, .fb, .ig, .tg, .gh, .gmail, .phone").removeClass("passive")
            } 
    });

    $(".gmail").on({
            mouseenter: function(){
                $("body").css("background-color", "#FFFFFF");
                $(".gmail").addClass("active_gmail");
                $(".vk, .fb, .ig, .tg, .gh, .tw, .phone").addClass("passive")
            },  
            mouseleave: function(){
                $("body").css("background-color", "#5296A5");
                $(".gmail").removeClass("active_gmail");
                $(".vk, .fb, .ig, .tg, .gh, .tw, .phone").removeClass("passive")
            } 
    });

    $(".phone").on({
            mouseenter: function(){
                $("body").css("background-color", "#FFFFFF");
                $(".phone").addClass("active_phone");
                $(".vk, .fb, .ig, .tg, .gh, .tw, .gmail").addClass("passive")
            },  
            mouseleave: function(){
                $("body").css("background-color", "#5296A5");
                $(".phone").removeClass("active_phone");
                $(".vk, .fb, .ig, .tg, .gh, .tw, .gmail").removeClass("passive")
            } 
    });

});