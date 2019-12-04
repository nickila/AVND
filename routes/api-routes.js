const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const Item = require("../models/wishes.js");
const UserModel = require("../models/users-model.js");
// const db = require("../models");

module.exports = function (app) {

    // following shows everything from the wishes table
    app.get("/api/all", function (req, res) {
        Item.findAll({}).then(function (results) {
            res.json(results);
        })

    })

    app.get("/api/login/:username", function (req, res) {
        if (req.params.username) {
            UserModel.findOne({
                where: {
                    userName: req.params.username
                }
            }).then(function (results) {
                res.json(results)
                console.log(results)
            })
        }
    })

    // following shows all other users wishlists but not own
    app.get("/api/:user", function (req, res) {
        if (req.params.user) {
            Item.findAll({
                where: {
                    userID: { [Op.not]: req.params.user },
                    removed: 0
                }
            }).then(function (results) {
                res.json(results);
            })
        }
    })

    // following gives the user their own requests but does not show suggestions from others
    app.get("/api/ownlist/:user", function (req, res) {
        if (req.params.user) {
            Item.findAll({
                where: {
                    userID: req.params.user,
                    suggested: false
                }
            }).then(function (results) {
                res.json(results);
            })
        }
    })

    app.get("/api/item/item-list-:item", function (req, res) {
        if (req.params.item) {
            Item.findOne({
                where: {
                    itemID: req.params.item
                }
            }).then(function (results) {
                res.json(results)
            })

        }

    })

    app.get("/api/list/:user", function (req, res) {
        if (req.params.user) {
            Item.findAll({
                where: {
                    userID: req.params.user,
                    removed: 0
                }
            }).then(function (results) {
                res.json(results);
            })
        }
    })

    // add a new item to your own list
    app.post("/api/new", function (req, res) {
        Item.create({
            item: req.body.item,
            description: req.body.description,
            userID: req.body.userID
        })
    })
    app.post("/api/item/removed", function (req, res) {
        Item.update(
            { removed: true },
            { where: { itemID: req.body.itemID } }
        )
    })
    app.post("/api/item/pending", function (req, res) {
        Item.update(
            { pending: true },
            { where: { itemID: req.body.itemID } }
        )
    })

    // remove an item
    app.post("/api/delete", function (req, res) {

        Item.destroy({
            where: {
                id: req.params.itemID
            }
        })
    })


}