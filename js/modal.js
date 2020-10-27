$(document).ready(function () {
  $(".imagen-proyecto").on("click", function () {
    let rutaImagen = $(this).attr("src");
    let modal = `
      <div class="modal" id="modal">
        <img src="${rutaImagen}" alt="" />
        <div class="btn-cerrar" id="btnCerrar">
          <i class="fa fa-times" aria-hidden="true"></i>
        </div>
      </div>
    `;

    $("#proyectos").after(modal);

    $("#btnCerrar").on("click", function () {
      $("#modal").remove();
    });
  });

  $(document).on("keyup", function (e) {
    if (e.which === 27) {
      $("#modal").remove();
    }
  });
});
