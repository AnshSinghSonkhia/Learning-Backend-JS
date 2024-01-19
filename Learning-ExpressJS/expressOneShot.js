const express = require('express')
const app = express()

// Configure EJS

app.set("view engine", "ejs");
app.use(express.static('./public'));

// Middleware

app.use(function(req, res, next){
    console.log("Heloooooooo from Middlewaree");
    next();
})

// Routes

app.get('/', function (req, res) {
  res.render("index", {age:20});
})

app.get('/contact', function (req, res) {
  res.render("contact", {name: "AnshSINGH"});
})

app.get('/error', function (req, res, next) {
  throw Error("Somethin Wenta Wrongas");
})

app.get('/aboutus', function (req, res, next) {
  throw Error("Volcano Erruption");
})

// Dynamic Route
app.get('/profile/:username', function (req, res) {
  res.render(`Profile page of ${req.params.username}`)
})

// Error Handling in Express.js is used after the LAST ROUTE.

app.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
      return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
  })

app.listen(3000)