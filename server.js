// Setup empty JS object to act as endpoint for all routes
projectData = {};


// Express to run server and routes
const express = require('express');


// Start up an instance of app
const app = express();


/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());


// Initialize the main project folder
app.use(express.static('website'));


// Setup server
const port = process.env.PORT || 2412;
// Spin up the server
app.listen(port, listening);
// Callback to debug
function listening() {
    console.log(`Server is running now on localhost: ${port}`);
}


// Get Route
// Initialize (all) route with a callback function
app.get('/all', getData);
// Callback function to complete GET '/all'
function getData(request, response) {
    response.send(projectData);
}


// Post Route
// Initialize (addAppData) route with a callback function
app.post('/addAppData', postData);
// Callback function to complete POST '/addAppData'
function postData(request, response) {
    let postedData = request.body;
    // To show postedData in the terminal
    console.log(postedData);

    projectData.city = postedData.city;
    projectData.temp = postedData.temp;
    projectData.date = postedData.date;
    projectData.content = postedData.content;

    response.send(projectData);
}