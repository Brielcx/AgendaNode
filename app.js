const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

let Lista = [
        {
          "nombre": "Juan",
          "apellido": "Pérez",
          "telefono": "1234567890"
        },
        {
          "nombre": "María",
          "apellido": "González",
          "telefono": "9876543210"
        },
        {
          "nombre": "Carlos",
          "apellido": "Rodríguez",
          "telefono": "5555555555"
        },
        {
          "nombre": "Ana",
          "apellido": "López",
          "telefono": "1111111111"
        },
        {
          "nombre": "Luis",
          "apellido": "Martínez",
          "telefono": "2222222222"
        },
        {
          "nombre": "Laura",
          "apellido": "Hernández",
          "telefono": "3333333333"
        },
        {
          "nombre": "Pedro",
          "apellido": "Sánchez",
          "telefono": "4444444444"
        },
        {
          "nombre": "Isabel",
          "apellido": "Díaz",
          "telefono": "6666666666"
        },
        {
          "nombre": "Andrés",
          "apellido": "Torres",
          "telefono": "7777777777"
        },
        {
          "nombre": "Sofía",
          "apellido": "Flores",
          "telefono": "8888888888"
        }
      
      
]


const routes = (router) => {
    const url = "http://www.raydelto.org/agenda.php";

    
    router.get('/Raydelto', async (request, response) => {
        response.json(
            await fetch(url).then((response) => {
                return response.json();
            })
        )
    })
    
    router.get('/Lista', async (request, response) => {
        response.json(Lista)
    })

    router.post('/Lista', (request, response) => {
        const contacto = {
            nombre: request.body.nombre,
            apellido: request.body.apellido,
            telefono: request.body.telefono
        }
        agenda.push(contacto);
        response.send("POST request hacia la lista de contactos");
    })
};
        
routes(app);

app.listen(3000);