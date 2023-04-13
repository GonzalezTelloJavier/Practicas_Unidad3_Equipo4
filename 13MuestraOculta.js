function muestraOculta(id) {
    var elemento = document.getElementById('contenidos_'+id);
    var boton = document.getElementById('boton_'+id);

    if (elemento.style.display == "none") {
      elemento.style.display = "block";
      boton.innerHTML = "Ocultar contenidos";
    } else {
      elemento.style.display = "none";
      boton.innerHTML = "Mostrar contenidos";
    }
  }