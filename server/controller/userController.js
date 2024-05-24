const db = require('../models/index');
const bcrypt = require('bcrypt')
class userController{
    async  crearUsuario(req, res) {
        try {
            const hash = await bcrypt.hash(req.body.password, 10);
    
            const usuario = await db.User.create({
                nombre: req.body.nombre,
                rol_id: 1,
                password: hash, 
                agregado_el: new Date(), 
                agregado_por: 1,
                activo: req.body.activo || true 
            });
    
            res.status(201).json({ status: true, usuario: usuario });
        } catch (error) {
            console.error('Error creando usuario:', error);
            res.status(500).json({ status: false, error: error.message });
        }
    }
    
}

module.exports = new userController();