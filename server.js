// main file of web server

// web server creates web pages in response to a request from a browser
// then the browser can display that page to a user

const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

// routing is figuring out what page user wants - usually is based on URL
const indexRouter = require('./routes/index.js')

const app = express()

// enable parsing of POST request form body
app.use(bodyParser.urlencoded({ extended: false }))

// configure it to use the Handlebars template engine and
// work with template files in the views directory
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use('/', indexRouter)

let server = app.listen(3000)
