const name = "app"
/*
let html = requireFile("./web/_.html")
html = html.replace("{CONTENT}", requireFile(`./web/${name}.html`))
html = html.replace("{NAME}", name)
html = global.featherRep(html)
*/
module.exports = function (app) {
  app.get(`/${name}`, (req, res) => {
    if (!req.session.username) return res.redirect("/");
    let html = requireFile("./web/_.html")
html = html.replace("{CONTENT}", requireFile(`./web/${name}.html`))
html = html.replace("{NAME}", name)
html = html.replace("{OWNAME}", req.session.username)
html = global.featherRep(html)
    res.send(html)
  })
}