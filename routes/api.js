const name = "api"

module.exports = function (app) {
  app.post(`/${name}/login`, (req, res) => {
    if (!req.body.username || !req.body.password) return res.send("The Username or Password is Incorrect, please try again.") 
    if (req.body.username && req.body.password) {
        if (global.checkPassword(req.body.username, req.body.password)) {
            req.session.username = req.body.username
            res.send("All set")
        } else {
            return res.send("The Username or Password is Incorrect, please try again.") 
        }
    } else {
        return res.send("The Username or Password is Incorrect, please try again.") 
    }
  })

  app.post(`/${name}/signup`, (req, res) => {
    if (!req.body.username || !req.body.password) return res.send("Provide a Username and Password.") 
    if (req.body.username && req.body.password) {
        if (global.passwordStrength(req.body.password)) {
            if (global.checkUsername(req.body.username)) {
                global.hashPassword(req.body.username, req.body.password)
                res.send("You may now login")
            } else {
                res.send("Username taken")
            }
        } else {
            res.send("Password too weak")
        }
    } else {
        res.send("Provide a Username and Password.") 
    }
  })
}