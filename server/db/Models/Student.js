const db = require('../db');
const { DataTypes } = require('sequelize');

const Student = db.define('student', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Student;
