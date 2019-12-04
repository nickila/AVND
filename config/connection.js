const Sequelize = require("sequelize");

let sequelize = new Sequelize("wishlist", "root", "sesame", {
    host: "localhost",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

module.exports = sequelize;