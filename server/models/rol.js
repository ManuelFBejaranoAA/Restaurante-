module.exports = (sequelize, DataTypes) => {
    const Rol = sequelize.define('roles', {
      nombre_rol: {
        type: DataTypes.STRING,
        allowNull: false
      },

    },{
        timestamps: false
    });
    return Rol;
  };
  