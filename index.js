const express = require('express');
const app = express();
const port = 8000;

app.use('/', require('./routes'));
app.use(express.static('assets'));
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port, function(err){
    if(err){
        console.log(err,'<<-- the error in listen()');
        return;
    }
    console.log('server is started...');
});