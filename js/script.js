$(document).ready(function () {
  $(window).scrollTop(0);

  // Tambahkan class "bg-dark" pada nav jika scrollTop lebih besar dari 50
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $("nav").addClass("bg-dark");
    } else if (!$(".navbar-collapse").hasClass("show")) {
      $("nav").removeClass("bg-dark");
    }
  });

  // Hilangkan class "bg-dark" pada nav jika navbar-toggler di-klik dan scrollTop kurang dari 50
  $(".navbar-toggler").click(function () {
    $("nav").addClass("bg-dark");
  });

  $(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
      $(".scroll-top").fadeIn(1000);
      $(".scroll-top").removeClass("visually-hidden");
    } else {
      $(".scroll-top").addClass("visually-hidden");
    }
  });

  $(document).on("scroll", function () {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".tag");

    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i];

      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible");
      } else {
        $(tag).removeClass("visible");
      }
    }
  });
  // fadeTo dijalankan setelah 3s
  $("#fadeTo").fadeTo(3000, 0.3);

  //membuat halaman preloader
  $(window).on("load", function () {
    $(".preloader").fadeOut("slow");
  });
});
