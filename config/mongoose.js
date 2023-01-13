const mongoose = require('mongoose');
//mongoose.connect('mongodb://127.0.0.1/Tasks');//mongodb local host server

mongoose.connect(
    process.env.mongodburl,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
);
const db = mongoose.connection;

db.on('error',console.log.bind(console, 'error connecting on database...'));
db.once('open', function(){
    console.log('connected to the mongodb database successfully...');
});