$(document).ready(function(){
    
    $(".vk").on({
            mouseenter: function(){
                $("body").css("background-color", "#507299");
                $(".vk").css("filter", "brightness(200%) grayscale(100%) contrast(50)");
                $(".fb, .ig, .tg, .gh, .tw, .gmail, .phone").css("opacity", "0.2");
                $(".fb, .ig, .tg, .gh, .tw, .gmail, .phone").css("filter", "brightness(100%) grayscale(100%) contrast(50)");

            },  
            mouseleave: function(){
                $("body").css("background-color", "#5296A5");
                $(".vk").css("filter", "none");
                $(".fb, .ig, .tg, .gh, .tw, .gmail, .phone").css("filter", "none");
                $(".fb, .ig, .tg, .gh, .tw, .gmail, .phone").css("opacity", "1");
            } 
    });

    $(".fb").on({
            mouseenter: function(){
                $("body").css("background-color", "#4267B2");
                $(".fb").css("filter", "brightness(200%) grayscale(100%) contrast(50)");
                $(".vk, .ig, .tg, .gh, .tw, .gmail, .phone").css("opacity", "0.2");
                $(".vk, .ig, .tg, .gh, .tw, .gmail, .phone").css("filter", "brightness(100%) grayscale(100%) contrast(50)");
            },  
            mouseleave: function(){
                $("body").css("background-color", "#5296A5");
                $(".fb").css("filter", "none");
                $(".vk, .ig, .tg, .gh, .tw, .gmail, .phone").css("filter", "none");
                $(".vk, .ig, .tg, .gh, .tw, .gmail, .phone").css("opacity", "1");
            } 
    });

    $(".ig").on({
            mouseenter: function(){
                $("body").css("background-color", "#FFFFFF");
                $(".ig").css("filter", "brightness(100%) grayscale(100%) contrast(2)");
                $(".vk, .fb, .tg, .gh, .tw, .gmail, .phone").css("opacity", "0.2");
                $(".vk, .fb, .tg, .gh, .tw, .gmail, .phone").css("filter", "brightness(100%) grayscale(100%) contrast(50)");
            },  
            mouseleave: function(){
                $("body").css("background-color", "#5296A5");
                $(".ig").css("filter", "none");
                $(".vk, .fb, .tg, .gh, .tw, .gmail, .phone").css("filter", "none");
                $(".vk, .fb, .tg, .gh, .tw, .gmail, .phone").css("opacity", "1");
            } 
    });

    $(".tg").on({
            mouseenter: function(){
                $("body").css("background-color", "#32AFED");
                $(".tg").css("filter", "brightness(200%) grayscale(100%) contrast(50)");
                $(".vk, .fb, .ig, .gh, .tw, .gmail, .phone").css("opacity", "0.2");
                $(".vk, .fb, .ig, .gh, .tw, .gmail, .phone").css("filter", "brightness(100%) grayscale(100%) contrast(50)");
            },  
            mouseleave: function(){
                $("body").css("background-color", "#5296A5");
                $(".tg").css("filter", "none");
                $(".vk, .fb, .ig, .gh, .tw, .gmail, .phone").css("filter", "none");
                $(".vk, .fb, .ig, .gh, .tw, .gmail, .phone").css("opacity", "1");
            } 
    });

    $(".gh").on({
            mouseenter: function(){
                $("body").css("background-color", "#24292E");
                $(".gh").css("filter", "brightness(200%) grayscale(100%) contrast(50)");
                $(".vk, .fb, .ig, .tg, .tw, .gmail, .phone").css("opacity", "0.2");
                $(".vk, .fb, .ig, .tg, .tw, .gmail, .phone").css("filter", "brightness(100%) grayscale(100%) contrast(50)");
            },  
            mouseleave: function(){
                $("body").css("background-color", "#5296A5");
                $(".gh").css("filter", "none");
                $(".vk, .fb, .ig, .tg, .tw, .gmail, .phone").css("filter", "none");
                $(".vk, .fb, .ig, .tg, .tw, .gmail, .phone").css("opacity", "1");
            } 
    });

    $(".tw").on({
            mouseenter: function(){
                $("body").css("background-color", "#FFFFFF");
                $(".tw").css("filter", "hue-rotate(15deg) brightness(200%)");
                $(".vk, .fb, .ig, .tg, .gh, .gmail, .phone").css("opacity", "0.2");
                $(".vk, .fb, .ig, .tg, .gh, .gmail, .phone").css("filter", "brightness(100%) grayscale(100%) contrast(50)");
            },  
            mouseleave: function(){
                $("body").css("background-color", "#5296A5");
                $(".tw").css("filter", "none");
                $(".vk, .fb, .ig, .tg, .gh, .gmail, .phone").css("filter", "none");
                $(".vk, .fb, .ig, .tg, .gh, .gmail, .phone").css("opacity", "1");
            } 
    });

    $(".gmail").on({
            mouseenter: function(){
                $("body").css("background-color", "#FFFFFF");
                $(".gmail").css("filter", "hue-rotate(170deg) brightness(200%)");
                $(".vk, .fb, .ig, .tg, .gh, .tw, .phone").css("opacity", "0.2");
                $(".vk, .fb, .ig, .tg, .gh, .tw, .phone").css("filter", "brightness(100%) grayscale(100%) contrast(50)");
            },  
            mouseleave: function(){
                $("body").css("background-color", "#5296A5");
                $(".gmail").css("filter", "none");
                $(".vk, .fb, .ig, .tg, .gh, .tw, .phone").css("filter", "none");
                $(".vk, .fb, .ig, .tg, .gh, .tw, .phone").css("opacity", "1");
            } 
    });

        $(".phone").on({
            mouseenter: function(){
                $("body").css("background-color", "#FFFFFF");
                $(".phone").css("filter", "brightness(100%) grayscale(100%) contrast(2)");
                $(".vk, .fb, .ig, .tg, .gh, .tw, .gmail").css("opacity", "0.2");
                $(".vk, .fb, .ig, .tg, .gh, .tw, .gmail").css("filter", "brightness(100%) grayscale(100%) contrast(50)");
            },  
            mouseleave: function(){
                $("body").css("background-color", "#5296A5");
                $(".phone").css("filter", "none");
                $(".vk, .fb, .ig, .tg, .gh, .tw, .gmail").css("filter", "none");
                $(".vk, .fb, .ig, .tg, .gh, .tw, .gmail").css("opacity", "1");
            } 
    });

});