const express = require('express');
const app = express();
const port = 8000;

app.set();

app.listen(port, function(err){
    if(err){
        console.log(err,'<<-- the error in listen()');
        return;
    }
    console.log('server is started....');
});