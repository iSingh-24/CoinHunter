const db = require('../db');
const { DataTypes } = require('sequelize');

const Crypto = db.define('crypto', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Crypto;
