/*function mostarFactorial(){
var numero = prompt("Introduce un n\u00famero y se mostrar\u00e1 su factorial");
var resultado = 1;

for(var i=1; i<=numero; i++) {
  resultado *= i;
}
alert(resultado);
}*/
function mostrarFactorial() {
    var numero = prompt("Introduce un número y se mostrará su factorial");
    var resultado = 1;
  
    for(var i=1; i<=numero; i++) {
      resultado *= i;
    }
  
    var resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = "El factorial de " + numero + " es: " + resultado;
  }
  