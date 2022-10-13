
require('cache-require-paths');
const JSONdb = require('simple-json-db');
const db = new JSONdb('user.db', {jsonSpaces: 0});
require("./localDeps/_.js")(db)
const express = require('express');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var compression = require('compression');
var fileStoreOptions = {};
var sessionOptions = {
  store: new FileStore(fileStoreOptions),
  secret: Date.now() * Date.now() + Date.now().toString(),
  cookie: { secure: true, maxAge: 604800000 },
  resave: false,
  saveUninitialized: true,
};
const app = express()

app.set('etag', false)

app.use(require("body-parser").json())

app.use(compression());

app.use(function (req, res, next) {
  res.removeHeader("x-powered-by");
  res.setHeader("Surrogate-Control", "no-store");
  res.setHeader(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, proxy-revalidate"
  );
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
  next();
});

// Apply the rate limiting middleware to API calls only
app.use('/api', require('express-rate-limit')({
  windowMs: 5 * 60 * 1000, // 15 minutes
  max: 500, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
}))

app.set('trust proxy', 1)

app.use(session(sessionOptions))

require("./routes/_")(express, app)

app.listen(3002)


process.on("uncaughtException", function () {
  require('child_process').exec("pm2 restart 1")
})