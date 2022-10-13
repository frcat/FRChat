const bcrypt = require("bcrypt")
const JSONdb = require('simple-json-db');
const db = new JSONdb('db/users.json', { jsonSpaces: 0 });

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
    bcrypt.compare(password, db.get(username), function (err, result) {
        if (err) return false;
        if (result) {
            return true;
        } else {
            return false;
        }
    });
}

global.checkUsername = function (username) {
    if (!db.has(username)) {
        return true
    } else {
        return false;
    }
}