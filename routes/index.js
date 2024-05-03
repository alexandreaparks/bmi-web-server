// create a function to create a webpage in response to different URLs
// each URL has its own function that creates the webpage sent to the browser

const express = require('express')  // import express library
const router = express.Router()  // this router object does the routing - based on URL and method

// GET request to home page
router.get('/', function (req, res, next) {
    console.log(req.query)
    // render template and optional data together
    res.render('index.hbs', {
        title: 'Body Mass Index Calculator',
        author: 'Alexandrea'
    })
})

// GET request for calculating BMI - used when form is submitted (calculated button is clicked)
// renders to a bmi results page
router.get('/calculate', function(req, res, next) {
    // get height and weight data from URL query
    const bmiFormData = req.query  // get URL query
    const height = bmiFormData.height
    const weight = bmiFormData.weight
    console.log(bmiFormData)

    if (weight === '' || height === '' || weight <= 0 || height <= 0) {
        // unsure of how to show an alert to enter valid height and weight
        // tried res.send() but it directs to a whole new page with the message
        // res.send('Please enter a valid height and weight')
        return
    }

    // calculate bmi and format with 2 decimal places
    const bmi = (weight / (height * height)).toFixed(2)
    console.log(bmi)

    // render bmi results template with BMI result data
    res.render('results', {
        bmi: bmi
    })
})



module.exports = router