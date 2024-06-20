const express = require('express');
const hbs = require('express-handlebars');

const path = require('path');
const PORT = 3012;

const app = express();

app.engine('hbs', hbs.engine({
    defaultLayout: 'main',
        extname: 'hbs'
        }));

app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname + '/public')))

      
const indexRoute = require('./routes/indexRoute');

app.use('', indexRoute);


app.listen(PORT, () => {
            console.log('app is running')
        })  


