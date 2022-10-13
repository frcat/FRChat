const name = "api"

module.exports = function (app) {
  app.post(`/${name}/login`, (req, res) => {
    if (!req.body.username || !req.body.password) return res.send("The Username or Password is Incorrect, please try again.") 
    if (req.body.username && req.body.password) {
        if (global.checkPassword(req.body.username, req.body.password)) {
            req.session.username = req.body.username
        } else {
            return res.send("The Username or Password is Incorrect, please try again.") 
        }
    } else {
        return res.send("The Username or Password is Incorrect, please try again.") 
    }
  })
}