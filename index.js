//Librerias
const express = require('express')

const r_usuarios = require('./src/rutas/r_usuarios')
const r_productos = require('./src/rutas/r_productos')


//Aplicación del servidor
const app = express()

//Middleware
app.use('/usuarios', r_usuarios)
app.use('/productos', r_productos)

app.get('/', (req, res)=>{
    res.send('Estás en la raiz de tu nuevo servidor node')
})

app.listen(8080, ()=>{
    console.log('El servidor está escuchando en puerto 8080');
})