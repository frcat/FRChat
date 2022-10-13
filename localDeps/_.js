module.exports = function (db) {
require("./checkPassword")
require("./feather")
require("./hash")(db)
require("./requireFile")
}