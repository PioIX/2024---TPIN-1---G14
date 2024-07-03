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
        nombre : getUserSignup(),
        contraseña : getPasswordSignup(),
    }

    const response = await fetch('http://localhost:3000/getUser',{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
          },
        body:JSON.stringify(data),
    }) 

    if (response.status == 200){
        alert("ingreso exitoso");
        changeScreen();
    }

}