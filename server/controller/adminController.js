const db = require('../models/index');
const cypto = require('crypto');
class adminController{
    async crearadmin(req, res){
        try {
            const admin = await db.Admin.create(req.body);
            res.status(201).json({status:true, admin:admin});
        } catch (error) {
            res.status(500).json({status:false, error:error});
        }
    }
}

module.exports = new adminController();