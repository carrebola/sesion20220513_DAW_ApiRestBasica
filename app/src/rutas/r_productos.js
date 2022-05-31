const express = require('express')
const r_productos = express.Router()

r_productos.get('/', (req, res)=>{
    res.send('Estás en la ruta de productos')
})

module.exports = r_productos