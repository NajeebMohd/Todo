const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Tasks');//mongodb local host server
//mongoose.connect('mongodb+srv://mohdnajeeb:mnujbksss@cluster0.dmdz8qa.mongodb.net/test');//free mongodb atlas cluster

const db = mongoose.connection;

db.on('error',console.log.bind(console, 'error connecting on database...'));
db.once('open', function(){
    console.log('connected to the mongodb database successfully...');
});