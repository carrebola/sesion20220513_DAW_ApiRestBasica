//Librerias
const express = require('express')
const morgan = require('morgan')

const r_usuarios = require('./src/rutas/r_usuarios')
const r_productos = require('./src/rutas/r_productos')

const db = require('./database.js')

//Verificamos conexión con base de datos
db.on('error', (error)=>{
    console.log('Se ha producido un error al conectar con la base de datos' + error);
})
db.on('connected', ()=>{
    console.log('La base de datos se ha conectado de muerte!!!')
})

//Aplicación del servidor
const app = express()

//Middleware
app.use(morgan('combined'))
app.use(express.json()) // parsear las peticiones 
app.use(express.urlencoded({extended: true})) //parsear datos en peticiones



app.use('/usuarios', r_usuarios)
app.use('/productos', r_productos)

app.get('/', (req, res)=>{
    res.send('Estás en la raiz de tu nuevo servidor node')
})

app.listen(8080, ()=>{
    console.log('El servidor está escuchando en puerto 8080');
})