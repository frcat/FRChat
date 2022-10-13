global.requireFile = function (file) {
    return require("fs").readFileSync(file, "utf8")
  }