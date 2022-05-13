const express = require('express')
const r_usuarios = express.Router()

r_usuarios.get('/', (req, res)=>{
    res.send('Estás en la ruta de usuarios')
})
r_usuarios.get('/web', (req, res)=>{
    res.send('Estás en la ruta de usuarios/web')
})

module.exports = r_usuarios