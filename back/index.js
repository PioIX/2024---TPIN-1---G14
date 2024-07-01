var express = require('express'); //Tipo de servidor: Express
var bodyParser = require('body-parser'); //Convierte los JSON
var cors = require('cors');

var MySql = require('./modulos/mysql.js')
var app = express(); //Inicializo express
var port = process.env.PORT || 3000; //Ejecuto el servidor en el puerto 3000

// Convierte una petición recibida (POST-GET...) a objeto JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res){
    res.status(200).send({
        message: 'GET Home route working fine!'
    });
});

app.post('/addUser', async function(req,res) {
    console.log(req.body);
    let usuarioExistente = await MySql.realizarQuery(`select * from Usuarios where Nombre = '${req.body.nombre}'`);
    if (usuarioExistente.length != 0) {
        res.status(204);
        res.send("ya existe ese usuario");
    } else {
        await MySql.realizarQuery(`INSERT INTO Usuarios (nombre, contraseña, mail, puntaje)
        VALUES ('${req.body.nombre}', '${req.body.contraseña}', '${req.body.mail}', 0)`);
        res.send("agregado");     
    }
})

app.listen(port, function(){
    console.log(`Server running in http://localhost:${port}`);
});