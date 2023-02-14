$(document).ready(function () {
  //when click button navbar-toggler make nav always add class bg-dark

  $(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
      $(".scroll-top").fadeIn(1000);
      $(".scroll-top").removeClass("visually-hidden");
      $("nav").addClass("bg-dark");
    } else {
      $("nav").removeClass("bg-dark");
      //$(".scroll-top").fadeIn(1000);
      $(".scroll-top").addClass("visually-hidden");
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

  //make scroll top button
  // $(window).scroll(function () {

  //   if ($(this).scrollTop() > 100) { //
  //     $(".scroll-top").fadeIn();
  //   } else {
  //     $(".scroll-top").fadeOut();
  //   }
  // });

  //jika berada di section dengan id home tombol scroll-top akan hilang sedangkan jika berada di halaman lain tombol scroll-top akan muncul dan jika di klik akan scroll ke atas

  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 100) {
  //     $(".scroll-top").fadeIn();
  //   } else {
  //     $(".scroll-top").fadeOut();
  //   }
  // });

  /**
   * Scroll top button
   */
  // const $scrollTop = $(".scroll-top");
  // if ($scrollTop.length) {
  //   $(window).on("scroll", function () {
  //     if ($(this).scrollTop() > 100) {
  //       $scrollTop.toggle("visually-hidden");
  //     } else {
  //       $scrollTop.fadeOut();
  //     }
  //   });

  //   $scrollTop.on("click", function () {
  //     $("html, body").animate(
  //       {
  //         scrollTop: 0,
  //       },
  //       500
  //     );
  //   });
  // }

  //ganti kode scroll top button di atas dengan jquery
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 100) {
  //     $(".scroll-top").fadeIn();
  //   } else {
  //     $(".scroll-top").fadeOut();
  //   }
  // });
});
