// running cmd npm init -y,  in an empty dir
// to create a http server
//fs comes built-in with the nodejs, express is someething u bring from internet.
const express = require('express')
const app = express()
const port = 3000

app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.listen(port, function()  {
  console.log(`Example app listening on port ${port}`)
})