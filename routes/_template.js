const name = ""

let html = requireFile("./web/_.html")
html = html.replace("{CONTENT}", requireFile(`./web/${name}.html`))
html = html.replace("{NAME}", name)
html = global.featherRep(html)

module.exports = function (app) {
  app.get(`/${name}`, (req, res) => {
    res.send(html)
  })
}