const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;

// handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});


// Servir contenido estatico
app.use( express.static('public'));

app.get('/', function (req, res) {
    res.render('home', {
        titulo: 'Curso de Node',
        nombre: 'Juan Manuel'
    });  
});

app.get('/generic', function (req, res) {
    res.render('generic', {
        titulo: 'Curso de Node',
        nombre: 'Juan Manuel'
    });  
});

app.get('/elements', function (req, res) {
    res.render('elements', {
        titulo: 'Curso de Node',
        nombre: 'Juan Manuel'
    });   
});

app.get('*', function (req, res) {
    res.render('404');    
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })