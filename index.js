var express = require('express')
var app = express()

var MarkovChain = require('markovchain')
  , fs = require('fs')
  , quotes = new MarkovChain(fs.readFileSync('./quotes.txt', 'utf8'))

app.get('/', function (req, res) {
  res.send(quotes.start('The').end(25).process())
})

app.listen(process.env.PORT || 5000)
