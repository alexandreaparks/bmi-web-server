// create a function to create a webpage in response to different URLs
// each URL has its own function that creates the webpage sent to the browser

const express = require('express')
const {request} = require("express");
const router = express.Router()

router.get('/', function (req, res) {
    console.log(req.query)
    const height = req.query.height
    res.render('index.hbs')
})



module.exports = router