//Importar dependencias 
const express = require("express");
const cors = require("cors");
const {connection} = require("./db/server");
//require("./db/connection")


//Mensaje bienvenido
console.log("Ejecucion del Index.js (API NODE para RED SOCIAL)")

//Conexioin a bbdd
connection()

//Crear servidor node
const app = express();
const puert = 3900;

//Configurar cors
app.use(cors());

//Convertir los datos del body a objetos js
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Cargar conf rutas
app.get("/rutaprueba", (req, res)=>{
    return res.status(200).json({
        "id": 1,
        "nombre": "marcos",
        "web": "marcos.com",
    })
})

//Poner servidor a escuchar peticiones http
app.listen(puert, () =>{
    console.log("running server on port: 3900")
})