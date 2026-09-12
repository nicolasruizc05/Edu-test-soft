let iniciar =()=>{
    // detener la recarga de la página
    event.preventDefault()
    // definir los datos de usuario guardado manualmente
    const UsuarioValido ="estudiante@soy.sena.edu.co"
    const PasswordValido ="123456"

    // obtener los datos ingresados por el usuario
    const UsuarioIngresado = document.getElementById ("email").value 
    const PasswordIngresado = document.getElementById ("password").value 

    //Validar si los datos ingresados son correctos
    if (UsuarioIngresado === UsuarioValido && PasswordIngresado === PasswordValido){
        // guardar la sesión del usuario en el almacenamiento local
        const sesionUsuario = {
            usuario: UsuarioIngresado,
            password: PasswordIngresado,
            autenticado: true
        }
        localStorage.setItem("SesionEduTestSoft", JSON.stringify(sesionUsuario))
        // redireccionar a la página de inicio
        document.getElementById("inicio").click()
    }
    else{
        alert("Credenciales incorrectas. Por favor, inténtelo de nuevo.")
    }
}