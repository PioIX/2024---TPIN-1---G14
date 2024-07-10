// const { url } = require("inspector");

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

    if (response.status == 200){
        alert("ingreso exitoso");
        changeScreen();
    }else{
        alert("el ususario o la contraseña es incorrecta");
    }

}

async function puntaje(){
    //let loginUser = getUser()
    //let loginPassword = getPassword()
    
    const data = {
        puntos : puntajeUsuario,
    }

    const response = await fetch('http://localhost:3000/addPoints',{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
          },
        body:JSON.stringify(data),
    }) 

    if (response.status == 200)
        alert("su puntaje es: ", puntajeUsuario);
    if (response.status == 204)
        alert("fallo el registro");
}