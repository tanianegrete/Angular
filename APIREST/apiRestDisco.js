const express = require('express'); //express es el que hace accion de levantar el servicio rest paginas http//
const bodyParser = require('body-parser');
var app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

let cors = require('cors')
app.use(cors())


let mysql = require("mysql");
const { send } = require('process');
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: null,
    database: "angular"
});

connection.connect(function(err) {
    if (err) {
        console.log(error);
    } else {
        console.log("Conexion correcta");
    }
});
//localhost:3991/discos

//devuelve todos los discos almacenados en la base de datos

app.get("/discos",
    function(request, response) {
        // let idDisco = request.params.id;
        // let params = new Array(idDisco);
        let sql = "SELECT * FROM discos";

        connection.query(sql, function(err, result) {
            if (err) {
                console.log(err);
            } else {

                console.log(result);
                response.send(result)
            }
        });

    });

//devuelve los datos del disco cuyo id corresponde en base de datos
//potsman: localhost:3991/discos

app.get("/discos/:id",
    function(request, response) {
        let idDisco = request.params.id;
        let array = new Array(idDisco);
        console.log(idDisco);
        let sql = "SELECT * FROM discos WHERE id =?";
        connection.query(sql, array, function(err, result) {
            if (err) {
                console.log(err);
            } else {

                console.log(result);
                response.send(result)
            }
        });

    });
//potsman: localhost:3991/discos/1 


//añade un disco a la base de datos

app.post("/discos",
    function(request, response) {

        let titulos = request.body.titulo;
        let interpretes = request.body.interprete;
        let anyo = request.body.anyoPublicacion;
        let params = [titulos, interpretes, anyo]
            //INSERT INTO  discos (titulo, interprete, anyoPublicacion ) VALUES ("nuevodisco","nuevo","1558")
        let sql = "INSERT INTO  discos ( titulo, interprete, anyoPublicacion ) VALUES ( ?,?,?)";

        connection.query(sql, params, function(err, result) {
            if (err) {
                console.log(err);
            } else {

                console.log(result);
                response.send(result)
            }

        });

    }
);


// potsman
// "titulo": "disco2",
// "interprete": "margarito",
// "anyoPublicacion":"2014" 



//actualiza la informacion de un disco

app.put("/discos",
    function(request, response) {

        console.log(request.body)
        let titulos = request.body.titulo;
        let interpretes = request.body.interprete;
        let anyo = request.body.anyoPublicacion;
        let idDisco = request.body.id; //duda?
        let params = [titulos, interpretes, anyo, idDisco]
            //UPDATE discos SET  titulo ="loco", interprete="fernan", anyoPublicacion="1998"  WHERE id =1
        let sql = "UPDATE discos SET  titulo = ?, interprete=?, anyoPublicacion=?  WHERE id = ?"
        connection.query(sql, params, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
                response.send(result)
            }
        });

    }

);




//elimina el disco de la base de datos

app.delete("/discos",
    function(request, response) {
        let idDisco = request.body.id;
        let params = [idDisco];
        //DELETE FROM `discos` WHERE id=7
        let sql = 'DELETE FROM discos WHERE id=?';
        connection.query(sql, params, function(err, result) {
            if (err) {
                console.log(err);
            } else {

                console.log(result);
                response.send(result);
            }
        });


    }

);



app.use(
    (req, res, next) => {
        let respuesta = { error: true, codigo: 404, mensaje: "‘Url no encontrada’ " };
        res.status(404).send(respuesta);
        //next();
    }
);
app.listen(3000, function() {
    console.log("‘Server is running..’");
});





app.listen(3991);