let cerrar =() =>{
    document.getElementById("cierre").click()
}
const nombre = "Nicolas Ruiz"
const rol = "Aprendiz"

  // carga la estructura del html antes de ejecutar el script
  document.addEventListener("DOMContentLoaded",() => {
    // busqueda de los elemnentos del DOM
    const nameEL = document.getElementById("name");
    const rolEL = document.getElementById("rol");
    const inicioEL = document.getElementById("inicio");

    // verificar si la etiqueta existe en la pantalla para asignar cada variable 
    if (nameEL) nameEL.textContent = nombre;
    if (rolEL) rolEL.textContent = rol;
    if (inicioEL) inicioEL.textContent = nombre
    //dividir el nombre en palabras y asignarlas a un array
    .split(" ")
    .map(palabra => palabra.charAt(0).toUpperCase()) // toma de las dos primeras letras de cada palabra
    .join(""); // se unen las dos primeras letras de cada palabra en el array ejm ("NR")

  });
// Buscamos botones por su ID
const btnPerfil = document.getElementById("btnPerfil");
const menuPerfil = document.getElementById("menuPerfil");
// verificar si existe
if (btnPerfil && menuPerfil) {
    // Agregamos un evento de clic al botón
    btnPerfil.addEventListener("click", (e) => {
        // detenemos el evento para no afectar a otros elementos
        e.stopPropagation();

        if (menuPerfil.style.display === "none" || menuPerfil.style.display === "") {
            // mostramos el menu 
            menuPerfil.style.display = "block";
        } else {
            // ocultamos el menu
            menuPerfil.style.display = "none";
        }   
    });

    // Agregamos un evento de clic al documento para cerrar el menú si se hace clic fuera de él
    document.addEventListener("click", () => {
        // oculyamos el menu si se da clic afuera de el 
        menuPerfil.style.display = "none";
    });

    // escuchamos el clic dentro de la tarjeta del menu 
    menuPerfil.addEventListener("click", (e) => {
        // detenemos el evento para no afectar a otros elementos
        e.stopPropagation();
    });
}



  










