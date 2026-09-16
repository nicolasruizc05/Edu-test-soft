let cerrar =() =>{
    document.getElementById("cierre").click()
}
const nombre = "Nicolas Ruiz"
const rol = "Aprendiz"

document.getElementById("name").textContent=nombre
document.getElementById("role").textContent=rol
document.getElementById("inicial").textContent=nombre.split(" ").map(palabra => palabra.charAt(0).toUpperCase()).join("")