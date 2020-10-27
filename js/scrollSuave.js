$(document).ready(function () {
  let btnVolverArriba = $("#btnVolverArriba");

  $(window).on("scroll", function () {
    let proyectosOffsetTop = $("#proyectos").offset().top;
    let scrollTop = $(window).scrollTop();
    if (scrollTop >= proyectosOffsetTop) {
      btnVolverArriba.css("margin-right", 0);
    } else if (scrollTop <= proyectosOffsetTop / 2) {
      btnVolverArriba.css("margin-right", "-60px");
    }
  });

  // Movimiento de scroll suave para "inicio" y "volver arriba"
  $("a.volver-arriba").on("click", function (e) {
    e.preventDefault();

    if ($(window).scrollTop() != 0) {
      $("html, body").stop().animate({ scrollTop: 0 }, 1000);
    }
  });

  // Movimiento de scroll suave para los demás elementos
  $("a.scroll-suave").on("click", function (e) {
    e.preventDefault();
    let seccionOffsetTop = $($(this).attr("href")).offset().top;
    $("html, body").stop().animate({ scrollTop: seccionOffsetTop }, 1000);
  });

  $("a.scroll-acerca-de").on("click", function (e) {
    e.preventDefault();
    let seccionOffsetTop = $($(this).attr("href")).offset().top - 122;
    $("html, body").stop().animate({ scrollTop: seccionOffsetTop }, 1000);
  });

  $("a.scroll-equipo").on("click", function (e) {
    e.preventDefault();
    let seccionOffsetTop = $($(this).attr("href")).offset().top - 68;
    $("html, body").stop().animate({ scrollTop: seccionOffsetTop }, 1000);
  });
});
