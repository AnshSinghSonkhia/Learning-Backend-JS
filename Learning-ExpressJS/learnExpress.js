const express = require('express')  // express package ki power aa gyi "express" mai
const app = express() // express ki power aa gyi "app" mai

// using the middleware
app.use(function(req, res, next){
    console.log("Heloooooooo from Middleware");
    next();
})

// using the 2nd middleware
app.use(function(req, res, next){
    console.log("Helo againn from Middleware 2");
    next();
})

// app se maine "get" route bnaya
app.get('/', function (req, res) {     
    // by default we are on the "/" route in the first page
  res.send('Hello0 Woorld-log')
})

// Let's create a /profile route
app.get('/profile', function (req, res) {     
    // by default we are on the "/" route in the first page
  res.send('profile of Mr. Falana Dikana')
})

app.listen(3000)    // server bn chuka hai dostonn!!!
