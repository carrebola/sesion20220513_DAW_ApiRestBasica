const express = require('express')
const { leerUsuarios, leerUsuarioId, crearUsuario, editarUsuarioId, borrarUsuarioId } = require('../controladores/c_usuarios')
const r_usuarios = express.Router()


r_usuarios.get('/', leerUsuarios)
// - get a /usuarios -->leerUsuarios()
r_usuarios.get('/:id', leerUsuarioId)
// - get a /usuarios/:id -->leerUsuarioId()
r_usuarios.post('/', crearUsuario)
// - post a /usuarios -->crearUsuario()
r_usuarios.put('/:id', editarUsuarioId)
// - put a /usuarios/:id -->editarUsuarioId()
r_usuarios.delete('/:id', borrarUsuarioId)

module.exports = r_usuarios