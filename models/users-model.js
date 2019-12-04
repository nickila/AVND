const Sequelize = require("sequelize");
let sequelize = require("../config/connection.js");

let UserModel = sequelize.define('users', {
    userID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING
    },
    firstName: {
        type: Sequelize.STRING

    },
    lastName: {
        type: Sequelize.STRING

    },
    bio: {
        type: Sequelize.STRING

    },

}, {
    timestamps: false
});

UserModel.sync();

module.exports = UserModel;