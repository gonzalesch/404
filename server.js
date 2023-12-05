'use strict';

const express = require('express');
// Import the 'express' module to create a web server
const app = express();
// Create an instance of the express application


const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';
// Define the port and host for the server

app.use(express.static('public'));
// Serve static files from the 'public' directory


app.get('/', (req,res) => {
// Define a route for the root path '/'
	res.sendFile(__dirname + '/website.html');
	// Send the 'website.html' file when a request is made to '/'
	console.log('Incoming Request Received');
	//output to the console log when someone accesses the website
});

app.listen(PORT, HOST, () => {
	console.log('Running on http://' + HOST + ':' + PORT);
	// Start the server, and listen on the specified port and host
});


