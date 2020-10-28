$(document).ready(function () {
  let formulario = $("#formulario");
  let nombre = $("#nombre");
  let correo = $("#correo");
  let mensaje = $("#mensaje");

  function valNombre(e) {
    if (!nombre.val()) {
      e.preventDefault();
      $('input[name="nombre"] + .error').css("display", "block");
    } else {
      $('input[name="nombre"] + .error').css("display", "none");
    }
  }

  function valCorreo(e) {
    if (!correo.val()) {
      e.preventDefault();
      $('input[name="correo"] + .error').css("display", "block");
    } else {
      $('input[name="correo"] + .error').css("display", "none");
    }
  }

  function valMensaje(e) {
    if (!mensaje.val()) {
      e.preventDefault();
      $('textarea[name="mensaje"] + .error').css("display", "block");
    } else {
      $('textarea[name="mensaje"] + .error').css("display", "none");
    }
  }

  formulario.on("submit", function (e) {
    valNombre(e);
    valCorreo(e);
    valMensaje(e);
  });
});
