# Boilerplate for Express.js file `script.js`

```js
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("./public"));

// Middleware

app.use(function (req, res, next) {
  console.log("Heloooooooo from Middlewaree");
  next();
});

// Routes

app.get("/", function (req, res) {
  res.render("index");
});

// Dynamic Route
app.get("/profile/:username", function (req, res) {
  res.render(`Profile page of ${req.params.username}`);
});

// Error Handling in Express.js is used after the LAST ROUTE.

app.use(function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { error: err });
});

app.listen(3000);

```



## Tasks while starting any backend project

1. Install Express.js - ```npm i express```
2. `Express.js` Boilerplate
    - Go to ```npmjs.com```
    - Search Express.js
    - Copy the code & use it
        
    ```js
    const express = require('express');
    const app = express();

    app.get('/', function (req, res) {
    res.send('Hello World');
    });

    app.listen(3000);
    ```

3. `EJS` Setup
    - Install EJS - ```npm i ejs```
    - Set View Engine

    ```js
    app.set("view engine", "ejs");
    ```

    - Create Views Folder
    - Create EJS Files
    - Render EJS Files inside Route
4. Express.js `Static` files setup
5. Architecture of Public Folder


