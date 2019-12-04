const Sequelize = require("sequelize");
let sequelize = require("../config/connection.js");

let Item = sequelize.define('wishes', {
    itemID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    item: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING
    },
    requested: {
        type: Sequelize.BOOLEAN,
        default: 1
    },
    suggested: {
        type: Sequelize.BOOLEAN,
        default: 0
    },
    pending: {
        type: Sequelize.BOOLEAN,
        default: 0,
    },
    removed: {
        type: Sequelize.BOOLEAN,
        default: 0
    },
    userID: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false
    }
}, {
    timestamps: false
});

Item.sync();

module.exports = Item;