// Fundo de estrelas

// var stars = [],
//     WIDTH = window.innerWidth,
//     HEIGHT = window.innerHeight,
//     FPS = 10, // Frames per second
//     NUM_STARS = WIDTH; // Number of stars

// function setup() {
//     'use strict';
//     createCanvas(WIDTH, HEIGHT);

//     // Push stars to array
//     for (var i = 0; i < NUM_STARS; i++) {
//         stars.push({
//             x: 0,
//             y: 0,
//             offset: Math.random() * 360,
//             // Weight orbit a little to be outside origin
//             orbit: (Math.random() + 0.01) * max(WIDTH, HEIGHT),
//             radius: Math.random() * 2,
//             vx: Math.floor(Math.random() * 10) - 5,
//             vy: Math.floor(Math.random() * 10) - 5
//         });
//     }

//     frameRate(FPS);
//     loop();
// }

// function draw() {
//     background(24, 24, 24);
//     push();
//     noFill();
//     colorMode(RGB, 255, 255, 255, 1);
//     stroke(240, 240, 240, 1);
//     strokeCap(ROUND);
//     strokeWeight(2);
//     for (var i = 0, x = stars.length; i < x; i++) {
//         var s = stars[i];
//         ellipse(s.x, s.y, s.radius, 0);
//     }
//     pop();
//     update();
// }

// function update() {
//     var originX = WIDTH / 2;
//     var originY = HEIGHT / 2;

//     for (var i = 0, x = stars.length; i < x; i++) {
//         var s = stars[i];


//         var rad = (frameCount * (1 / (s.orbit * 2 + s.offset)) + s.offset) % TAU;
//         s.x = (originX + cos(rad) * (s.orbit * 2));
//         s.y = (originY + sin(rad) * (s.orbit));
//     }
// }

// function windowResized() {
//     WIDTH = window.innerWidth,
//         HEIGHT = window.innerHeight,
//         resizeCanvas(WIDTH, HEIGHT);
// }

// fim Fundo de estrelas
(function() {

      //seleciona o elemento video pelo ID "video"
      var video = document.getElementById("video");
      
      //Verifica se o navegador possui suporte para dar play no video
      video.addEventListener( "canplay", function() {
        //Chama o método play
        video.play();
      });
      
    })();
// Preloader

$('#status').fadeOut();
$('#preloader').delay(1000).fadeOut('slow');

// fim Preloader

// barra de navegação fixa

var offset = $('#nav').offset().top;
var $nav = $('#nav');
$(document).on('scroll', function () {
    if (offset <= $(window).scrollTop()) {
        $nav.addClass('fixar');
    } else {
        $nav.removeClass('fixar');
    }
});

// fim barra de navegação fixa

// Rolagem

$('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    $('a').each(function () {
        $(this).removeClass('active');
    })
    $(this).addClass('active');

    var target = this.hash;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top + 2
    }, 1000, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll");
    });
});

// fim Rolagem

// Scroll up

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.scroll-up').fadeIn();
    } else {
        $('.scroll-up').fadeOut();
    }
});

// fim Scroll up

// Citacoes

$(".typed").typed({
    strings: ["'Creativity is intelligence, having fun'"],
    typeSpeed: 100,
    backDelay: 900,
    loop: true
});

// Citacoes

// Hover portfolio

$(".hover").mouseleave(
    function () {
        $(this).removeClass("hover");
    }
);

// fim Hover portfolio

// Animacoes

$("#logo").addClass('animated fadeIn');

$(".lema").typed({
    strings: ["Space Apps Challenge"],
    typeSpeed: 70
});

$("#botao").addClass('animated bounce');

new WOW().init();

// map

$("#buscar").submit(function() {

    var geocoder = new google.maps.Geocoder();
    var address = $("#buscar").serialize();

    geocoder.geocode( { 'address': address}, function(results, status) {

        if (status == google.maps.GeocoderStatus.OK) {
            var latitude = results[0].geometry.location.lat();
            var longitude = results[0].geometry.location.lng();
            location.href = "map.html?lat=-"+latitude+"&long="+longitude;
        }
    });

});



