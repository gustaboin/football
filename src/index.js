const express = require('express');


const app = express();

// databases
// Database
const { database } = require('./keys');


// settings

app.set('port', process.env.PORT || 3000);


app.listen(app.get('port'), () =>
{
    console.log('Server on port ===>', app.get('port'));
})