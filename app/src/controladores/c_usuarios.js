const m_usuarios = require('../modelos/m_usuarios')

module.exports = {
    leerUsuarios : async (req, res)=>{
        //leer de la base de datos
        try {
            const usuariosEncontrados = await m_usuarios.find()
            res.json(usuariosEncontrados)
        } catch (error) {
            res.json({
                error: error,
                mensaje: 'Ohhhhh, algo ha ido mal en la petición con la bd ' + error
            })
        }
    },
    leerUsuarioId : async (req, res)=>{
        //leer de la base de datos un elemento
        try {
            const id = req.params.id
            const usuarioEncontrado = await m_usuarios.findById(id)
            res.json(usuarioEncontrado)
        } catch (error) {
            res.json({
                error: error,
                mensaje: 'Ohhhhh, algo ha ido mal en la petición con la bd ' + error
            })
        }       
    },
    crearUsuario : async(req, res)=>{
        const usuario = new m_usuarios({
            nombre: req.body.nombre ,
            apellidos: req.body.apellidos,
            email: req.body.email
        })
        try {
            const usuarioGuardado = await usuario.save()
            res.json(usuarioGuardado)
        } catch (error) {
            res.json({
                error: error,
                mensaje: 'Ohhhhh, algo ha ido mal en la petición con la bd ' + error
            }) 
        }
    },
    editarUsuarioId : async (req, res)=>{
        //editar de la base de datos un elemento
        try {
            const id = req.params.id
            const usuario = {
                nombre: req.body.nombre,
                apellidos: req.body.apellidos,
                email: req.body.email
            }
            const usuarioEncontrado = await m_usuarios.findByIdAndUpdate(id, usuario)
            res.json(usuarioEncontrado)
        } catch (error) {
            res.json({
                error: error,
                mensaje: 'Ohhhhh, algo ha ido mal en la petición con la bd ' + error
            })
        }
    },
    borrarUsuarioId : async (req, res)=>{
        //borrar de la base de datos un elemento
        try {
            const id = req.params.id
            const usuarioEncontrado = await m_usuarios.findByIdAndDelete(id)
            res.json(usuarioEncontrado)
        } catch (error) {
            res.json({
                error: error,
                mensaje: 'Ohhhhh, algo ha ido mal en la petición con la bd ' + error
            })
        }

    }
}