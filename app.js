const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();  //returns an express application

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('view engine', 'pug');

app.get('/', (req, res) => {
	const name = req.cookies.username;
	if (name) {
		res.render('index', { name });
	} else {
		res.redirect('/hello');
	}
});

app.get('/cards', (req, res) => {
	res.render('cards', { prompt: "Placeholder for a question?"});
});

app.get('/hello', (req, res) => {
	const name = req.cookies.username;
	if (name) {
		res.redirect('/');
	} else {
		res.render('hello');
	}	
})

app.post('/hello', (req, res) => {
	res.cookie('username', req.body.username)
	res.redirect('/');
})

app.post('/goodbye', (req, res) => {
	res.clearCookie('username');
	res.redirect('/hello');
})

app.use((req, res, next) => {
	const err = new Error('not found');
	err.status = 404;
	next(err)
})

app.use((err, req, res, next) => {
	res.locals.error = err;
	res.status(err.status);
	res.render('error')
})

app.listen(3001, () => {
	console.log('the application is running on localhost:3001');
});