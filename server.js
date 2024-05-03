// main file of web server

// web server creates web pages in response to a request from a browser
// then the browser can display that page to a user

const path = require('path')  // import path library
const express = require('express')  // import express library
const bodyParser = require('body-parser')  // imported this in class, but don't think it's necessary? no POST request

// routing is figuring out what page user wants - usually is based on URL
const indexRouter = require('./routes/index.js')  // import routes

const app = express()

// enable parsing of POST request form body
app.use(bodyParser.urlencoded({ extended: false }))

// server static files
const staticFileLocation = path.join(__dirname, 'public')  // where static files are stored
app.use(express.static(staticFileLocation))  // tell application to use static files and where they can be found


// configure it to use the Handlebars template engine and
// work with template files in the views directory
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use('/', indexRouter)  // make routes in index.js available to application

// start server
let server = app.listen(process.env.PORT || 3000, function () {  // use specific port OR 3000
    console.log('Server is running on port ' + server.address().port)
})
