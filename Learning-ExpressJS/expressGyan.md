# Express.js Gyan

- Node VS Express - What's the real deal?
- Why Express.js?
- Routing
- Middleware
- Request & Response
- Route Parameters
- Templates
- Static Files
- HTTP Methods: GET & POST
- Error Handling

# Node VS Express - What's the real deal?

- You can run node.js without Express.js
- You can NOT use Express.js without node.js

--------

- Node makes the server
- But, to use the server features you need apps.
- Express.js provides you the facility to use server features of node.js

--------

- use node without express with ```https://nodejs.org/docs/latest/api/```
- but, using these features with express.js is a lot more easy.

--------

- you can make server without express using ```https://nodejs.org/docs/latest/api/http.html``` in node, with that you'll have to write 10x more lines of code.
- Behind the scenes, Express.js uses the same HTTP Package of node.js to make server easily in less lines of code.

--------

So, industry use `Express.js` & you have to use it too :)

# Why Express.js?
because Node's HTTP is difficult to use & express makes it easier.

# Routing

The process of creating routing.
For example: `/profile`, `/contact`, `/about`

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

# Middleware: Parameters of `app.use` - req, res, next

## `req`
- Request
- It has the user data (The user who is trying to run this server. by sending a request to the server.)
- For Example:
    - Anmol logins on instagram: The request will have the data of Anmol.

---

- In Express.js middleware, req stands for the request object, containing information about the incoming HTTP request, like parameters or headers. Middleware functions often use req to inspect or modify the request before passing it to the next function. It's like a package with details about what the client is asking for.

## `res`
- Response
- The `Response` that the server sends in reply for the `request` from the user falls under `res` parameter of middlewares.
- So, the `res` consists of all the code sent from the server to the user.

## `next`

- Next
- The next parameter in these function, allows the request to move on to the next function.
-  it passes control to the next function in line. If you forget to use next, the request might get stuck, and later functions won't run.

---
- It jumps to next middleware or the next route by using:

```js
next();
```

# Route Parameters

- We can NOT make different multiple routes for huge amount of profiles of a vast number of People. So we bring `Dynamic Routing`

## Dynamic Routing

A route in which some part remains the same everytime & some other part of the route changes everytime, then in this case we use `dynamic routing`

- `/profile/ansh`
- `/profile/anshu`
- `/profile/anshika`
- `/profile/mahindra`
- `/profile/tata`
- `/profile/ambani`

---

- Here, `/profile` is same & the later is changing

- So, we can use a parameter in place of the names of different routes.
- It starts with a colon `:` & then a `id`

---

For Example:
- `/profile/:id`
- you can replace "id" with anything
>
- `/profile/:kuchbhi`   or      `/profile/:ninjaHatori`
- colon `:` means -- anything can come in place of id

---

## Dynamic Route Syntax

```js
app.get('/profile/:username', function (req, res) {
  res.send(`Profile page of ${req.params.username}`)
})
```

- `params`: refers to route parameters.
- Route parameters are placeholders in the URL pattern, allowing you to capture values from the URL dynamically. 

# Template Engines - `EJS`
> They convert a style of markup into HTML

- There are many Template Engines like - pug, ejs, handlebars, jade,...
- But, we will use `EJS` because it is very very similar to `HTML`

HTML Do NOT have power to calculate anything

`EJS` is `HTML` with superpowers

EJS = `Embedded JavaScript Templates`

- We want things to be dynamic & therefore we don't prefer to use HTML.

## How to use EJS?

1. Install ejs

    ```console
    npm i ejs
    ```

2. Configure EJS

    > Write this before writing routes
    ```js
    app.set("view engine", "ejs");
    ```

3. Create a `views` folder.

4. Create ejs files in `views` folder - ```index.ejs```
    - use `HTML` boilerplait in it :)

5. Use `render` at the place of `send`.
    > For Example:
    > `res.send` should be changed to `res.render` in routing.

    ```js
    app.get('/', function (req, res) {
        res.render("index");    // index is used to link index.ejs file
    })
    ```

## Sending data in `.ejs file` with `res`

```js
app.get('/', function (req, res) {
  res.render("index", {age:20});
})
```
in this example, everywhere there is age used, it will be replaced by 20

## Using data in `.ejs file`, sent by `res`

```js
<%= age %>  // use "age" inside <%=  %> will replace it with the age data
```

# What are Static Files?
It includes setting up Images, Stylesheets, Frontend JavaScript

## Steps to setup Static Files:
1. Create folder named `public`
2. Create 3 folders inside it - `images`, `stylesheets` & `JavaScripts`
3. Configure the Express Static in `index.js` file

    ```js
    app.use(express.static('./public'));
    ```
4. Understand the path.

# Error Handling in Express.js

Go to website: ```https://expressjs.com/en/guide/error-handling.html```

- Copy this `Error Handler`:
    ```js
    function errorHandler (err, req, res, next) {
    if (res.headersSent) {
        return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
    }
    ```

- Paste it after the last Route, inside app.use()
    ```js
    app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
        return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
    })
    ```

- Create an `error route`
    ```js
    app.get('/error', function (req, res, next) {
        throw Error("Somethin Wenta Wrongas");
    })
    ```

## How Error Handling is working??

- `throw Error()` finds the `errorHandler()`, the errorHandler shows whatever the error is.