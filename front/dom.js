const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const toggleFormBtn = document.getElementById('toggle-form-btn');
const formTitle = document.getElementById('form-title');
var puntajeUsuario = 0


loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    alert(`Login attempt for username: ${username}`);
});

signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    alert(`Sign up attempt for username: ${username}, email: ${email}`);
});



function getUserLogin() {
    return document.getElementById('login-username').value;
}

function getPasswordLogin() {
    return document.getElementById('login-password').value;
}

function getUserSignup() {
    return document.getElementById('signup-username').value;
}

function getPasswordSignup() {
    return document.getElementById('signup-password').value;
}

function getMailSignup() {
    return document.getElementById('signup-email').value;
}

function changeScreen() {
    const main = document.getElementById("main");
    const login = document.getElementById("login");
    if(main.style.display !== "none") {
        main.style.display = "none";
        login.style.display = "";
    }
    else {
        main.style.display = "";
        login.style.display = "none";
    }
}

function boton1A(){
    const buton = document.getElementById("boton1A");
    const buton2 = document.getElementById("boton1B");
    buton.style.backgroundColor = "red";
    buton2.disabled = true;
    buton2.style.backgroundColor = "green"
}

function boton1B(){
    const buton = document.getElementById("boton1B");
    buton.style.backgroundColor = "green";
    puntajeUsuario += 1
    buton.disabled = true;
}

function boton2A(){
    const buton = document.getElementById("boton2A");
    const buton2 = document.getElementById("boton2B");
    buton.style.backgroundColor = "red";
    buton2.disabled = true;
    buton2.style.backgroundColor = "green"
}

function boton2B(){
    const buton = document.getElementById("boton2B");
    buton.style.backgroundColor = "green";
    puntajeUsuario += 1
    buton.disabled = true;
}

function boton3A(){
    const buton = document.getElementById("boton3A");
    buton.style.backgroundColor = "green";
    puntajeUsuario += 1
    buton.disabled = true;
}

function boton3B(){
    const buton = document.getElementById("boton3B");
    const buton2 = document.getElementById("boton3A");
    buton.style.backgroundColor = "red";
    buton2.disabled = true;
    buton2.style.backgroundColor = "green"
}

function boton4A(){
    const buton = document.getElementById("boton4A");
    buton.style.backgroundColor = "green";
    puntajeUsuario += 1
    buton.disabled = true;
}

function boton4B(){
    const buton = document.getElementById("boton4B");
    buton.style.backgroundColor = "red";
    const buton2 = document.getElementById("boton4A");
    buton2.disabled = true;
    buton2.style.backgroundColor = "green"
}

function boton5A(){
    const buton = document.getElementById("boton5A");
    buton.style.backgroundColor = "red";
    const buton2 = document.getElementById("boton5B");
     buton2.disabled = true;
    buton2.style.backgroundColor = "green"
}

function boton5B(){
    const buton = document.getElementById("boton5B");
    buton.style.backgroundColor = "green";
    puntajeUsuario += 1
    buton.disabled = true;
}

function boton6A(){
    const buton = document.getElementById("boton6A");
    buton.style.backgroundColor = "green";
    puntajeUsuario += 1
    buton.disabled = true;
}

function boton6B(){
    const buton = document.getElementById("boton6B");
    buton.style.backgroundColor = "red";
    const buton2 = document.getElementById("boton6A");
    buton2.disabled = true;
    buton2.style.backgroundColor = "green"
}

function boton7B(){
    const buton = document.getElementById("boton7B");
    buton.style.backgroundColor = "red";
    const buton2 = document.getElementById("boton7A");
    buton2.disabled = true;
    buton2.style.backgroundColor = "green"
}

function boton7A(){
    const buton = document.getElementById("boton7A");
    buton.style.backgroundColor = "green";
    puntajeUsuario += 1
    buton.disabled = true;
}

function boton8A(){
    const buton = document.getElementById("boton8A");
    buton.style.backgroundColor = "red";
    const buton2 = document.getElementById("boton8B");
    buton2.disabled = true;
    buton2.style.backgroundColor = "green"
}

function boton8B(){
    const buton = document.getElementById("boton8B");
    buton.style.backgroundColor = "green";
    puntajeUsuario += 1
    buton.disabled = true;
}

function boton9A(){
    const buton = document.getElementById("boton9A");
    buton.style.backgroundColor = "red";
    const buton2 = document.getElementById("boton9B");
    buton2.disabled = true;
    buton2.style.backgroundColor = "green"
}

function boton9B(){
    const buton = document.getElementById("boton9B");
    buton.style.backgroundColor = "green";
    puntajeUsuario += 1
    buton.disabled = true;
}

function boton10A(){
    const buton = document.getElementById("boton10A");
    buton.style.backgroundColor = "green";
    puntajeUsuario += 1
    buton.disabled = true;
}

function boton10B(){
    const buton = document.getElementById("boton10B");
    buton.style.backgroundColor = "red";
    const buton2 = document.getElementById("boton10A");
    buton2.disabled = true;
    buton2.style.backgroundColor = "green"
}