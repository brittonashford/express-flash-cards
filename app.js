const express = require('express');
const app = express();  //returns an express application

app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('index'); //refers to the index.pug file. extension not needed.
});

app.get('/hello', (req, res) => {
	res.send("<h1>Hello! Here is another page</h1>")
});

app.listen(3001, () => {
	console.log('the application is running on localhost:3001');
});