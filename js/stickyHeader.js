$(document).ready(function () {
  let fixedHeader = $("#fixedHeader");

  $(window).on("scroll", function () {
    let proyectosOffsetTop = $("#proyectos").offset().top;
    let scrollTop = $(window).scrollTop();
    if (scrollTop >= proyectosOffsetTop) {
      fixedHeader.css("margin-top", 0);
    } else if (scrollTop <= proyectosOffsetTop / 2) {
      fixedHeader.css("margin-top", "-68px");
    }
  });
});
