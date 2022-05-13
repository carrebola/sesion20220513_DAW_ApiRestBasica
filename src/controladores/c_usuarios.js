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
    leerUsuarioId : (req, res)=>{
        res.send('Estás en la leerUsuarioId')
    },
    crearUsuario : (req, res)=>{
        res.send('Estás en  crearUsuario')
    },
    editarUsuarioId : (req, res)=>{
        res.send('Estás en  editarUsuarioId')
    },
    borrarUsuarioId : (req, res)=>{
        res.send('Estás en  borrarUsuarioId')
    }
}