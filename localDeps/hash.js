const res = require("express/lib/response");

module.exports = function (db) {
const bcrypt = require("bcrypt")

global.hashPassword = function (username, password) {
    bcrypt.hash(password, 10, function (err, hash) {
        if (err) return false;
        if (hash) {
            db.set(username, hash)
            return true;
        }
    });
}

global.checkPassword = function (username, password) {
    return bcrypt.compareSync(password, db.get(username))
}

global.checkUsername = function (username) {
    if (!db.has(username) && username.length > 0 && username.length < 101) {
        return true
    } else {
        return false;
    }
}
}