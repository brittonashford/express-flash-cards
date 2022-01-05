const express = require('express');

const app = express();  //returns an express application

app.get('/', (req, res) => {
	res.send("<h1>This is the home page. Welcome.</h1>")
});

app.get('/hello', (req, res) => {
	res.send("<h1>Hello! Here is another page</h1>")
});

app.listen(3001, () => {
	console.log('the application is running on localhost:3001');
});