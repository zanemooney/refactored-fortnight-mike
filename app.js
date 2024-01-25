const express = require('express')
const app = express()
const port = process.env.PORT || 5500;

// set the viuew engine to ejs
app.set('view engine', 'ejs')


let myTypeServer = 'The General';

app.get('/', function (req, res) {
  
    res.render('\index.ejs', {

      myTypeClient: myTypeServer
    })

app.get('/', function (req, res) {
  
    res.send('Hello World from Express ')
})

// app.listen(3000)

app.listen(port, () => {

  console.log(`november app listening on port ${port}`)

  console.log(`mike app listening on port ${port}`)

})