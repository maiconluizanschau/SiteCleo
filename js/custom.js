$(document).ready(function () {

    "use strict";


    /* _____________________________________

     Preloader
     _____________________________________ */

    if ((".loader").length) {
      // show Preloader until the website ist loaded
      $(window).on('load', function () {
        $(".loader").fadeOut("slow");
      });
    }


    /* _____________________________________

     Smooth Scroll
     _____________________________________ */


    var topHeight = 0;

    if ($(".navbar-fixed-top").length) {
      topHeight = 80;
    }
    $('a.smooth-scroll').on('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - topHeight
      }, {
        duration: 1000,
        specialEasing: {
          width: "linear",
          height: "easeInOutCubic"
        }
      });
      event.preventDefault();
    });

    /* _____________________________________

     Scroll Top
     _____________________________________ */

    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        $('.btn-top').fadeIn();
      } else {
        $('.btn-top').fadeOut();
      }
    });


    /* _____________________________________

     Scroll Animations
     _____________________________________ */


    if (Modernizr.csstransforms3d) {
      window.sr = ScrollReveal();

      sr.reveal('.reveal-bottom-20', {
        origin: 'bottom',
        distance: '20px',
        duration: 800,
        delay: 400,
        opacity: 1,
        scale: 0,
        easing: 'linear',
        reset: true
      });

      sr.reveal('.reveal-top-20', {
        origin: 'top',
        distance: '20px',
        duration: 800,
        delay: 400,
        opacity: 1,
        scale: 0,
        easing: 'linear',
        reset: true
      });

      sr.reveal('.reveal-left-10', {
        origin: 'left',
        distance: '10px',
        duration: 800,
        delay: 400,
        opacity: 1,
        scale: 0,
        easing: 'linear',
        reset: true
      });

      sr.reveal('.reveal-left-20', {
        origin: 'left',
        distance: '20px',
        duration: 800,
        delay: 400,
        opacity: 1,
        scale: 0,
        easing: 'linear',
        reset: true
      });

      sr.reveal('.reveal-right-10', {
        origin: 'right',
        distance: '10px',
        duration: 800,
        delay: 400,
        opacity: 1,
        scale: 0,
        easing: 'linear',
        reset: true
      });

      sr.reveal('.reveal-right-20', {
        origin: 'right',
        distance: '20px',
        duration: 800,
        delay: 400,
        opacity: 1,
        scale: 0,
        easing: 'linear',
        reset: true
      })

      sr.reveal('.reveal-bottom-opacity', {
        origin: 'bottom',
        distance: '20px',
        duration: 800,
        delay: 0,
        opacity: 0,
        scale: 0,
        easing: 'linear',
        mobile: false
      });
      ;
    }

    /* _____________________________________

     Navigation Transparent / White
     _____________________________________ */


    function changeColorLight() {

      if ($(window).scrollTop() > 60 || $(window).width() < 992) {
        navbar.addClass("navbar-light");
      } else {
        navbar.removeClass("navbar-light");
      }
    }

    function changeColorDark() {
      if ($(window).scrollTop() > 60 || $(window).width() < 992) {
        navbar.addClass("navbar-dark");
      } else {
        navbar.removeClass("navbar-dark");
      }
    }


    function changeColorDarkColor() {
      var scrollHeight = $(window).scrollTop();
      if ((scrollHeight > 60 || $(window).width() < 992)) {
        navbar.addClass("navbar-dark")
          .find(".btn-circle").removeClass("btn-grey")
          .addClass("btn-color");
        $('.logo-wg span').css("background-image", "url(images/logo-silver.png)");
      } else {
        navbar.removeClass("navbar-dark")
          .find(".btn-circle").removeClass("btn-color")
          .addClass("btn-grey");
        $('.logo-wg span').css("background-image", "url(images/logo-white.png)");
      }
    }

    // only change Color for fixed Navbar
    if ($('.navbar-fixed-top').length) {


      var navbar = $(".navbar");

      // change Colors for light Navbar Version
      if ($('.light-nav').length) {
        // Navigation color change
        $(window).on('scroll resize load', function () {
          changeColorLight();
        });
      }

      // change Colors for dark Navbar Version
      if ($('.dark-nav').length) {
        $(window).on('scroll resize load', function () {
          changeColorDark();
        });
      }

      // change Colors for dark Navbar Version
      if ($('.dark-nav-colored-hero').length) {
        $(window).on('scroll resize load', function () {
          changeColorDarkColor();
        });
      }
    }


    /* _____________________________________

     Navbar Icon
     _____________________________________ */

    $('.collapse').on('show.bs.collapse', function () {
      $('.navbar-icon').addClass('open');
    });
    $('.collapse').on('hide.bs.collapse', function () {
      $('.navbar-icon').removeClass('open');
    });


    /* _____________________________________

     Accordion
     _____________________________________ */

    var containerActive = '.panel .panel-collapse.in';
    $(containerActive).parent().addClass('active');
    $(containerActive).parent().find('i').addClass('icon-arrows-minus');
    $(containerActive).parent().find('i').removeClass('icon-arrows-plus');
    $('.panel').on('shown.bs.collapse', function () {
      $(this).addClass('active');
      $(this).find('i').addClass('icon-arrows-minus');
      $(this).find('i').removeClass('icon-arrows-plus');
    })
      .on('hidden.bs.collapse', function () {
        $(this).removeClass('active');
        $(this).find('i').addClass('icon-arrows-plus');
        $(this).find('i').removeClass('icon-arrows-minus');
      });


    /* _____________________________________

     Owl Carousel
     _____________________________________ */

    if ($(".gallery-slider").length) {
      $('.gallery-slider').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 2000,
        dotsEach: 2,
        slideBy: 2,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            margin: 20
          },
          320: {
            items: 2,
            margin: 20
          },
          640: {
            items: 3,
            margin: 20
          },
          992: {
            items: 4,
            margin: 30
          }
        }
      })
    }

    if ($(".testimonial-slider").length) {
      $('.testimonial-slider').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        items: 1,
        smartSpeed: 4000

      })
    }


    /* _____________________________________

     Tooltip
     _____________________________________ */

    $('[data-toggle="tooltip"]').tooltip();


    /* _____________________________________

     Video Thumbnail & Embedding (only Youtube / Vimeo)
     _____________________________________ */

    if ($('#video-embed').length) {
      Video('#video-embed');
    }


    /* _____________________________________

     Mail Chimp
     _____________________________________ */

    if ($('#mc-form').length) {
      $('#mc-form').ajaxChimp({
        callback: mailchimpCallback,
        // Replace the URL above with your mailchimp URL (put your URL inside '').
        url: ''
      });
    }

    // callback function when the form submitted, show the notification box
    function mailchimpCallback(resp) {
      var form = $('#mc-form'),
        messageContainer = $('#message-newsletter');

      form.find('.form-group').removeClass('error');
      if (resp.result === 'error') {
        form.find('.form-group').addClass('error');
      } else {
        form.find('.form-control').fadeIn().val('');
      }

      messageContainer.slideDown('slow', 'swing');

      setTimeout(function () {
        messageContainer.slideUp('slow', 'swing');
      }, 10000);
    }


    /* _____________________________________

     Charts / Circle Animation
     _____________________________________ */

    if ($('#charts').length) {
      var elements = $('#charts .circle');
      var o = $('#charts'),
        cc = 1;

      $(window).on('scroll', function () {
        var elemPos = o.offset().top,
          elemPosBottom = o.offset().top + o.height(),
          winHeight = $(window).height(),
          scrollToElem = elemPos - winHeight,
          winScrollTop = $(this).scrollTop();

        if (winScrollTop > scrollToElem) {
          if (elemPosBottom > winScrollTop) {
            if (cc < 2) {
              cc = cc + 2;
              var circles = [];

              for (var i = 0; i < elements.length; i++) {
                var child = elements[i].id,
                  percentage = $(elements[i]).data('percentage'),
                  unit = $(elements[i]).data('unit'),
                  value = $(elements[i]).data('value');

                circles.push(Circles.create({
                  id: child,
                  value: percentage,
                  radius: 64,
                  width: 4,
                  duration: 1200,
                  text: '<p class="chart-value">' + value + '<span class="chart-unit">' + unit + '</span></p>'
                }));
              }
            }
          }
        }
      });
    }


    /* _____________________________________

     Bootstrap Fix: IE10 in Win 8 & Win Phone 8
     _____________________________________ */


    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
      var msViewportStyle = document.createElement('style')
      msViewportStyle.appendChild(
        document.createTextNode(
          '@-ms-viewport{width:auto!important}'
        )
      )
      document.querySelector('head').appendChild(msViewportStyle)
    }

  }
)
;
