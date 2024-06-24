function login(){
    let loginUser = getUser()
    let loginPassword = getPassword()
    if (checkUser(loginUser, loginPassword) > 0 ){
    }
    else if(checkUser(loginUser, loginPassword) == 0 ){
        alert("La contraseña es incorrecta ")
    }
    else{
        alert("El usuario es incorrecto")
    }
}