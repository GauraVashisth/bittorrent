// running cmd npm init -y,  in an empty dir
// to create a http server
//fs comes built-in with the nodejs, express is someething u bring from internet.
const express = require('express')
const app = express()
const port = 3000

// similar to fs.readFIle("path", "utf-8", ())
// home route logic at '/'
app.get('/', function(req, res) {
  res.send('Hello World!')
})


// route for calculatingsum at '/sqaure'
function sum (n) {
  let ans= 0;
  for (let i =1; i<=n; i++){
    ans = ans +i;
  }
  return ans;
}

app.get("/square", (req, res) => {
  const n = req.query.n;
  const ans = sum(n);
  res.send("hi, ur answer is: " + ans);
})

app.listen(port, function()  {
  console.log(`Example app listening on port ${port}`)
})