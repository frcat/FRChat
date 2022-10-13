const name = ""

module.exports = function (app) {
  app.get(`/${name}`, (req, res) => {
    res.send(html)
  })
}