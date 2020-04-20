(function ($) {
  "use strict";

  //when dom is ready
  $(document).ready(function () {
    $(window).on("scroll", function () {
      if ($(window).width() > 800) {
        if ($(window).scrollTop() > 100) {
          $("#header").addClass("navbar-fixed-top");
          $("#back-to-top").addClass("reveal");
        } else {
          $("#header").removeClass("navbar-fixed-top");
          $("#back-to-top").removeClass("reveal");
        }
      }
    });

    //Owl Carousel-- Team Member
    $(".testimonial-container").owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      margin: 20,
      autoplay: true,
      autoplayHoverPause: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1200: {
          items: 1,
        },
      },
    });

    // Start Animated Number
    $(".animated-counter").appear(function () {
      $(".animated-number").countTo({
        speed: 4000,
        refreshInterval: 60,
        formatter: function (value, options) {
          return value.toFixed(options.decimals);
        },
      });
    });

    // Start Easy Pie Chart
    $(".progress-chart-feature").appear(function () {
      $(".chart").easyPieChart({
        animate: 2000,
        barColor: "#f6d014",
        trackColor: "#f6f6f6",
        scaleColor: "",
        lineCap: "round",
        lineWidth: 10,
        size: 130,
      });
    });

    $("#datepicker").datepicker();
  });
  //dom ready end
})(jQuery);
