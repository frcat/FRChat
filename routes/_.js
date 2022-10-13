module.exports = function (express, app) {
app.use('/favicon.png', express.static('./web/FRChatFavicon.png'))
app.use('/css', express.static('./localDeps/css'))
app.use('/js', express.static('./web/js'))
app.use('/meow', express.static('./web/meow.png'))
//routes
require("./landing")(app)
require("./login")(app)
require("./signup")(app)
require("./app")(app)
require("./api")(app)
}

// test acc
// !1@2AaBc!!22