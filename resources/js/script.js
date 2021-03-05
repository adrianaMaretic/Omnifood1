$(document).ready(function () {
  //   For sticky navigation
  $(".js--section-features").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px",
    }
  );

  //   Scroll on buttons
  $(".js--scroll-to-plans").click(function () {
    $("html,body").animate(
      { scrollTop: $(".js--section-plans").offset().top },
      1000 //--->1000 milisekundi odnosno 1 sekunda
    );
  });

  $(".js--scroll-to-start").click(function () {
    $("html,body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      1000
    );
  });

  //   Navigation scroll
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                return false;
              } else {
                $target.attr("tabindex", "-1");
                $target.focus();
              }
            }
          );
        }
      }
    });

  // Animations on scroll
  $(".js--wp-1").waypoint(
    (direction) => {
      $(".js--wp-1").addClass("animate__animated animate__fadeIn");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-2").waypoint(
    (direction) => {
      $(".js--wp-2").addClass("animate__animated animate__fadeInUp");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-3").waypoint(
    (direction) => {
      $(".js--wp-3").addClass("animate__animated animate__fadeIn");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-4").waypoint(
    (direction) => {
      $(".js--wp-4").addClass("animate__animated animate__pulse");
    },
    {
      offset: "50%",
    }
  );

  // Mobile navigation
  var nav = $(".js--main-nav");
  var icon = $(".js--nav-icon ion-icon");

  $(".js--nav-icon").click(function () {
    nav.slideToggle(200);
    if (icon.attr("name") === "menu") {
      icon.attr("name", "close");
    } else {
      icon.attr("name", "menu");
    }
  });

  /* Window resizing and nav display */
  $(window).resize(function () {
    if ($(window).width() > 767) {
      nav.css("display", "block");
      icon.attr("name", "close");
    } else {
      nav.css("display", "none");
      icon.attr("name", "menu");
    }
  });
});
