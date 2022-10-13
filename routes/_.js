module.exports = function (express, app) {
app.use('/favicon.png', express.static('./web/FRChatFavicon.png'))
app.use('/css/pico', express.static('./node_modules/@picocss/pico/css'))
app.use('/css/landing.css', express.static('./localDeps/css/landing.css'))
app.use('/css/forms.css', express.static('./localDeps/css/forms.css'))
app.use('/js', express.static('./web/js'))
app.use('/meow', express.static('./web/meow.png'))
//routes
require("./landing")(app)
require("./login")(app)
require("./signup")(app)
require("./api")(app)
}

// test acc
// !1@2AaBc!!22