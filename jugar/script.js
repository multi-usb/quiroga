// Función para mostrar el alert en pantallas pequeñas
function showAlertForMobile() {
  if (window.innerWidth <= 576 ) { // Puedes ajustar este valor según tus necesidades
    alert("Juego solo disponible en PC");
  }
}

// Llama a la función al cargar la página
window.addEventListener("load", showAlertForMobile);
