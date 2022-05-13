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

        res.send('leer usuario')
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
    crearUsuario : (req, res)=>{
        res.send('Estás en  crearUsuario')
    },
    editarUsuarioId : (req, res)=>{
        res.send('Estás en  editarUsuarioId')
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