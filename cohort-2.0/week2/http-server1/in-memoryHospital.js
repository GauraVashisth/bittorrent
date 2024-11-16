// create an in memory hospital

/*u need to create 4 routes(things the hospital can do)
  * GET - user can check how many kidneys they have and their health
  * POST - user can add a new kidney
  * PUT - user can replace a kidney, make it healthy
  * DELETE - user can remove a kidney
*/
const express = require ("express")
const app = express();
const port=3001;
var users = [{
  name: 'John',
  kidneys: [{
    healthy: false
  },{
    healthy: true
  }]
},{
  name: 'jacob',
  kidneys: [{
    healthy: true
  },{
    healthy: true
  }]  
}]

app. get ("/", (req, res) => {
  const JohnKidneys= users[0].kidneys;
  const totalUsers = users.length;
  const totalKidneys = JohnKidneys.length;
  // using filters
  let healthyKidneys = 0;
  for (let i= 0; i < JohnKidneys.length; i++){
    if (JohnKidneys[i].healthy){
      healthyKidneys = healthyKidneys + 1;
    }
  }
  const unhealthyKidneys =  totalKidneys -healthyKidneys;

  res.json({
    totalUsers,
    JohnKidneys,
    healthyKidneys,
    unhealthyKidneys
  })
})

app. post ("/", (req, res) => {

})

app. put ("/", (req, res) => {

})

app. delete ("/", (req, res) => {

})

app.listen (port, () => {
  console.log(`i am your doctor at port: ${port}`)
  // (``), backtick, is used for template literals; it allows embedding expressions directly into strings.
})