const mongoose = require('mongoose')

//creamos el esquema
const usuarioSchema = new mongoose.Schema({
    nombre: String,
    apellidos: String,
    email: String
})

//creamos el modelo
const m_usuarios = mongoose.model('usuarios' , usuarioSchema)

module.exports = m_usuarios