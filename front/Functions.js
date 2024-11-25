// const { url } = require("inspector");
var usuarioLoged = 0

async function register(){
    //let loginUser = getUser()
    //let loginPassword = getPassword()
    
    const data = {
        nombre : getUserSignup(),
        contraseña : getPasswordSignup(),
        mail: getMailSignup()
    }

    const response = await fetch('http://localhost:3000/addUser',{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
          },
        body:JSON.stringify(data),
    }) 

    if (response.status == 200)
        alert("registrado correctamente");
    if (response.status == 204)
        alert("fallo el registro");
}

async function login(){
    const data = {
        nombre : getUserLogin(),
        contraseña : getPasswordLogin(),
    }

    let url = `http://localhost:3000/getUser?nombre=${data.nombre}&contraseña=${data.contraseña}`

    const response = await fetch(url,{
        method:"GET",
        headers: {
            "Content-Type": "application/json",
          }
    }) 
    const respuesta = await response.json();
    console.log(respuesta)
    if (response.status == 200){
        usuarioLoged = respuesta.id
        alert("ingreso exitoso");
        changeScreen();
    }else{
        alert("el ususario o la contraseña es incorrecta");
    }

}

async function actualizarPuntuacion(){
    const data = {
        puntaje : puntajeUsuario,
        id: usuarioLoged
    }

    const response = await fetch('http://localhost:3000/updatePoints',{
        method:"PUT",
        headers: {
            "Content-Type": "application/json",
          },
        body:JSON.stringify(data),
    }) 

    if (response.status == 200)
        alert("Su puntaje es: " + puntajeUsuario);
    if (response.status == 204)
        alert("Su puntaje es: " + puntajeUsuario);
}

