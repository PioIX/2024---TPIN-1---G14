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

app.get('/', async function(req, res){
    const respuesta = await MySql.realizarQuery("SELECT * FROM Usuarios;")
    res.send(respuesta)
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

app.get('/getUser', async function(req,res) {
    console.log(req.query);
    let usuarioExistente = await MySql.realizarQuery(`select * from Usuarios where nombre = '${req.query.nombre}' and contraseña = '${req.query.contraseña}'` );
    if (usuarioExistente.length != 0 ) {
        res.status(200);
        res.send({res:"usuario ingresado", id: `${usuarioExistente[0].id}`});
    } else {
        res.status(204);
        res.send({res:"usuario o contraseña incorrecta",id: usuarioExistente.id});   
    }
})

app.listen(port, function(){
    console.log(`Server running in http://localhost:${port}`);
});

app.post('/addPoints', async function(req,res) {
    console.log(req.body);
        await MySql.realizarQuery(`INSERT INTO Usuarios (puntaje)
        VALUES ('${req.body.nombre}', '${req.body.contraseña}', '${req.body.mail}', 0)`);
        res.send("agregado");     
})

app.put('/updatePoints', async function(req,res) {
    console.log(req.body);
        await MySql.realizarQuery(`UPDATE Usuarios SET puntaje = ${req.body.puntaje} WHERE id = ${req.body.id};`);
        res.send("agregado");     
})