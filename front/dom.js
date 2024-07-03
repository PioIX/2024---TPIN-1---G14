const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const toggleFormBtn = document.getElementById('toggle-form-btn');
const formTitle = document.getElementById('form-title');


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