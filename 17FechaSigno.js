function obtenerNumeroSuerte(fecha) {
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const anio = fecha.getFullYear();
    let suma = dia + mes + anio;
    let numeroSuerte = 0;
    while (suma > 0) {
      numeroSuerte += suma % 10;
      suma=Math.floor(suma / 10);
    }
    return numeroSuerte;
  }
  
  function obtenerSignoZodiacal(fecha) {
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    
    if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
      return "Aries";
    } else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
      return "Tauro";
    } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
      return "Géminis";
    } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
      return "Cáncer";
    } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
      return "Leo";
    } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
      return "Virgo";
    } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
      return "Libra";
    } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
      return "Escorpio";
    } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
      return "Sagitario";
    } else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
      return "Capricornio";
    } else if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
      return "Acuario";
    } else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
      return "Piscis";
    }
  }
  
  function actualizarResultado() {
    const fecha = new Date(document.getElementById("fecha-nacimiento").value);
    const numeroSuerte = obtenerNumeroSuerte(fecha);
    const signoZodiacal = obtenerSignoZodiacal(fecha);
    const divResultado = document.getElementById("resultado");
    
    divResultado.innerHTML = `Signo zodiacal: ${signoZodiacal}<br>Número de la suerte: ${numeroSuerte}`;
    
    switch(signoZodiacal) {
      case "Aries":
        divResultado.style.backgroundColor = "#FF5733";
        break;
      case "Tauro":
        divResultado.style.backgroundColor = "#8B4513";
        break;
      case "Géminis":
        divResultado.style.backgroundColor = "#FFFF00";
        break;
      case "Cáncer":
        divResultado.style.backgroundColor = "#FF1493";
        break;
      case "Leo":
        divResultado.style.backgroundColor = "#FFD700";
        break;
      case "Virgo":
        divResultado.style.backgroundColor = "#228B22";
        break;
      case "Libra":
        divResultado.style.backgroundColor = "#FFC0CB";
        break;
      case "Escorpio":
        divResultado.style.backgroundColor = "#800080";
        break;
      case "Sagitario":
        divResultado.style.backgroundColor = "#FFA500";
        break;
      case "Capricornio":
        divResultado.style.backgroundColor = "#696969";
        break;
      case "Acuario":
        divResultado.style.backgroundColor = "#00FFFF";
        break;
      case "Piscis":
        divResultado.style.backgroundColor = "#ADD8E6";
        break;
    }
  }
  function calcular() {
    actualizarResultado();
  }
    
  