
Programación de una api rest para aplicación distribuida

Programaremos una api rest básica basada en NodeJS y express. Para la capa de persistencia utilizaremos una bd mongodb alojada en MongoDB atlas.

Requisitos:
- VisualStudioCode
- NodeJS y npm
- Cuenta en MongoDB atlas
- Postman

Procedimiento:
1. Instalación y creación de un proyecto con NodeJS
2. Creamos ruta / con app.get
3. levantamos servidor en puerto 8080

4. crear rutas
    - http://localhost:8080/usuarios
    - http://localhost:8080/productos

5. controladores
    - get a /usuarios -->leerUsuarios()
    - get a /usuarios/:id -->leerUsuarioId()
    - post a /usuarios -->crearUsuario()
    - put a /usuarios/:id -->editarUsuarioId()
    - delete a /usuarios/:id -->borrarUsuarioId()