const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rol_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    agregado_el: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    agregado_por: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    activo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
  }, {
    timestamps: false,
    tableName: 'usuarios',
  });

  return User;
};
