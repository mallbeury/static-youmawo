(function($) {
    "use strict";

    function setupHandlers() {
      $('#header-view .hamburger').click(function(evt){
        $('#menu-overlay-view').fadeIn();
      });

      $('#menu-overlay-view .hamburger').click(function(evt){
        $('#menu-overlay-view').fadeOut();
      });

      $('#quotes-view .nav-btn.left-btn').click(function(evt){
        $('#quotes-view .slider').slick('slickPrev');
      });

      $('#quotes-view .nav-btn.right-btn').click(function(evt){
        $('#quotes-view .slider').slick('slickNext');
      });

      setInterval(function() {
        $('#media-view .slider').slick('slickNext');
      }, 2000);
    }

    $(document).ready(function() {
      $('#quotes-view .slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      });

      $('#media-view .slider').slick({
        infinite: true,
        slidesToShow: 5,
        centerMode: true,
        speed: 2000,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
        ]
      });

      particlesJS('particles-js',

          {
            "particles": {
              "number": {
                "value": 125,
                "density": {
                  "enable": true,
                  "value_area": 1736.124811591
                }
              },
              "color": {
                "value": "#ffffff"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#000000"
                },
                "polygon": {
                  "nb_sides": 5
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 3,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#629cc8",
                "opacity": 0.4,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 3,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "bounce",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "grab"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 250,
                  "line_linked": {
                    "opacity": 0.65
                  }
                },
                "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true
          }
      );

      setupHandlers();
    });

}(jQuery));

