$(document).ready(function () {
  //when click button navbar-toggler make nav always add class bg-dark

  $(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
      $("nav").addClass("bg-dark");
    } else {
      $("nav").removeClass("bg-dark");
    }
  });

  $(".navbar-toggler").click(function () {
    $("nav").toggleClass("bg-dark");
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
});
