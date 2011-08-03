#!/usr/bin/env node

var isaacs = require("isaacs")
var argv = require("optimist").argv

if (argv.h || argv.help) {
  console.error("Usage:\n  isaacs\n  isaacs -n LINES\n")
}
else if (argv.n) {
  isaacs(function (izs) {
    for (var i = 0; i < argv.n; i++) {
      var s = izs.speak().join(" ")
      console.log(s)
    }
    izs.end()
  })
}
else {
  var stdin = process.openStdin()
  isaacs(function (izs) {
    process.stdout.write("> ")
    
    stdin.on("data", function (buf) {
      var line = buf.toString()
      var s = izs.speak(line).join(" ")
      console.log(s)
      process.stdout.write("> ")
    })
  })
}
