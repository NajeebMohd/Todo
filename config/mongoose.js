const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Tasks');

const db = mongoose.connection;

db.on('error',console.log.bind(console, 'error connecting on database...'));
db.once('open', function(){
    console.log('connected to the mongodb database successfully...');
});