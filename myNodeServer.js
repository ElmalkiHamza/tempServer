// Import the express module and assign it to the 'express' constant
const express = require('express')

// Create an instance of an express application and assign it to the constant app
const app = express()

//
app.get('/temperature/', (req, res) => {
    const body = 'Hi, your GET request to this resource has been received correctly.'
    
    // Creating the header of the response
    res.writeHead(200, {
        "content-length" : body.length,
        "content-type": "plain/text"
    })

    // Sending the response
    res.send(body)
})

// Open a door that has the number 2000 and listen to incoming HTTP request on it
app.listen(3000, function () {
    console.log("Express web server is listening to HTTP requests to the http://localhost:3000/temperature/ ")
})


