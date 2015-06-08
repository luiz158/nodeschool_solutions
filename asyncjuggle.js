var http = require('http')
var bl = require('bl')
var promise = require('promise')

var urls = process.argv.slice(2,5)

function fetch(url) {
  return new promise(function (resolve, reject) {
    http.get(url, function (res) {
      res.pipe(bl(function (err, buff) {
        if (err) { reject(err) }
          else resolve(buff.toString())
        }))
    })
  })
}

promise.all(urls.map(fetch)).then(function (responses) {
  responses.forEach(function (res) {
    console.log(res)
  })
})