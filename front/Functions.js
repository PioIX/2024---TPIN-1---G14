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

async function traerTabla() {
    let url =
      'http://localhost:4000/getTabla';
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log("result: ", result.publicaciones);
}

async function mostrarRanking() {
    const url = 'http://localhost:3000/getRanking';
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.status === 200) {
            const ranking = await response.json();
            const rankingBody = document.getElementById('ranking-body');
            rankingBody.innerHTML = ''; // Limpia la tabla

            ranking.forEach((item, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${item.nombre}</td>
                    <td>${item.puntaje}</td>
                `;
                rankingBody.appendChild(row);
            });

            // Cambia la vista
            document.getElementById('main').style.display = 'none';
            document.getElementById('ranking').style.display = 'block';
        } else {
            alert('Error al obtener el ranking');
        }
    } catch (error) {
        console.error('Error fetching ranking:', error);
    }
}

function volverAlJuego() {
    document.getElementById('ranking').style.display = 'none';
    document.getElementById('main').style.display = 'block';
}
