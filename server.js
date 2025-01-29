const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/connection');

// Configuration view engine
app.set('view engine', 'ejs');

// Stactic files
app.use(express.static('public'));

// conect to database
connection.authenticate().then(() => {
    console.log('Database connected');
}).catch((err) => {
    console.log(err);
});

// Configuration do body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.render('index');
})


app.listen(3000, () => {
    console.log('Server started on port 3000');
});