const express = require('express');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

// Database
const { database } = require('./keys');
const pool = require('./database')



// settings

app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, 'views')); /* para traer la carpeta views*/
//app.set('views/partials', path.join(__dirname, '/views/partials')); /* para traer la carpeta views*/
app.set('view engine', 'ejs');


// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) =>
{
    res.render('index');
}
);

// Public -- static
app.use(express.static(path.join(__dirname, 'public')));


app.listen(app.get('port'), () =>
{
    console.log('Server on port ===>', app.get('port'));
});