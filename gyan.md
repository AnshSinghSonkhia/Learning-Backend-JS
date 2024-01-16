install ka matlab hota hai aapke laptop/computer/tablet mai files ko copy krna.

# What is Node.js?
Node.js is a lot of C++ code taken from chrome browser's V8 Engine's code.
And, this C++ code was wrapped by JavaScript Code.
And, this allows us to write JS Code & it will accept our code, providing (building) a server environment on the basis of C++. But, only till when Node.js is running.

- JavaScript does not have power in itself, to make a server.
- That's why Chrome's V8 Engine's C++ Code was used.
- But, it was written on C++, so, we have to write C++ code.

- That's why, he made a wrapper, i.e., written in JavaScript.

- So, (The V8 Engine's C++ Code) + (Wrapper [JS], wrapping that C++ code) = Node.js

### So, what's the procedure?

- Our JavaScript code will be given to the JS Wrapper.
- Wrapper will communicate with C++ code to make server & run our code.

## Import & export in JS

- Jis file mai aapka data hota hai - wahaan se hota hai export
- Jis file mai aapko data use krna hai - wahaan hota hai import

> use the below to export a variable from one file.

```js
module.exports = variable_name;
```

> use this at top, to import any variable from another file.

```js
var chacha = require('./file_name');
```

## Run the code

write this command on terminal. For example, to run a file named `script.js`

```bash
node .\script.js
```

<!-- 53:47 npm usage - NodeJS Part 2 -->
# npm usage
`npm` = node package manager

This was the full form earlier, when it only provides npm packages.
- But, now it also provides packages for react, etc..
- So, they don't have a full form for NPM.

npm provides packages which have some features.
It's like downloading code from a playsore

## Install Packages from

```js
https://www.npmjs.com/
```

# Express.js
> Fast, unopinionated, minimalist web framework for Node.js.

- Express is a framework, which have pre-buit tools, we can use.

### Install

```js
npm i express
```

## Express.js Use Cases

> basic code template (boilerplate)
```js
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)        // will run on port 3000 (you can change it)
```

### 1. Routing
in the links, everything with "slash" -- /
is routes, i.s., different URLs

For Example: ```www.mentorheal.com/mentors```

Here, `/mentors` is a route

we want user to get different things at different routes.
For Example:
- /profile
- /contact
- /comment
- /post
.
.
.

### Different Routing Methods of Routing
- GET:          URL mai input data dikhta hai -- while random search on google
- POST:         URL mai input data `nhi` dikhta hai -- While Login/Signup
- PUT
- PATCH
- DELETE


# Install Nodemon globally in your pc

```js
npm i nodemon -g
```

> Now you no longer need to write `node .\script.js` repeatively on your command to run file

### Run this command once:
```js
npx nodemon .\file_name.js
```

# Middleware    
`interview-question`

middleware is the process in between
"server pr Request aane ke baad" & "route tk pahuchne se pehle"

- Middleware function, routes se pehle chalta hai,
- So, if you want to perform some function before running the routes... you can use middlewares.
- Middleware will run before any route that your website has.

For Example:
> Print something before running on route.
> Increase +1 the value of hit counter, before running the routes. (i.e., the page visit counts)

> **_NOTE:_** Use middlewares before routes in code.

```js
app.use(function(req, res, next){
    console.log("Heloooooooo from Middleware");
    next();
})
```

### Problem with middleware:
- If our middleware runs, the requests get jammed & don't reach to the route :(
    > Solution:
    > We need to give a small push to it to send it to the route.

    - That's why we have to run `next()` inside the `app.use` function... after using middleware
    ```js
    app.use(function(req, res, next){
    console.log("Middleware use hone ke baad next() run karoooo");
    next();
    })
    ```
- `next()` will jump to next middleware.
- use `next()` in 2nd middleware end to jump to next middleware, up to the last middleware, & then to the routes.

### How many middlewares can I create?

any number of middleware, that you wish.