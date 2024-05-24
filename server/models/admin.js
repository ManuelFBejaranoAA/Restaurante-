module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define('Admin', {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      token: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      tableName: 'administrador',  // Nombre específico de la tabla
      timestamps: false            // Si no deseas timestamps como createdAt y updatedAt
    });
  
    return Admin;
  };
  