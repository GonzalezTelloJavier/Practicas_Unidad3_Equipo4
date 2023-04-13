/*function valida(campo){
			var bRet = false;
			if (campo.value == "")
				alert("Faltan datos");
			else 	if (!campo.value.match(/^[A-Z]{3,4}[0-9]{6}[A-Z]{3}[0-9]{2}$/))
            		alert("No tiene formato de RFC");
				else
					bRet = true;
			return bRet;
}*/
function valida(event) {
    event.preventDefault();
    var campo = document.getElementsByName("txtRFC")[0];
    var resultado = document.getElementById("resultado");
    if (campo.value == "") {
        resultado.innerHTML = "Faltan datos";
        resultado.className = "mensaje-error";
    } else if (!campo.value.match(/^[A-Z]{3,4}[0-9]{6}[A-Z]{3}[0-9]{2}$/)) {
        resultado.innerHTML = "No tiene formato de RFC";
        resultado.className = "mensaje-error";
    } else {
        resultado.innerHTML = "RFC válido";
        resultado.className = "mensaje-exito";
    }
}