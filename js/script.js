$(document).ready(function () {
  $(".fadeTo").fadeTo(1000, 0.5);
  $(".fadeTo2").fadeTo(1000, 0.8);
  //make navbar bg-dark on scroll
  $(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
      $("nav").addClass("bg-dark");
    } else {
      $("nav").removeClass("bg-dark");
    }
  });
});
