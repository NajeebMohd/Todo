const mongoose = require('mongoose');

const TaskScheme = new mongoose.Schema({
    discription : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    }
});

const Task = mongoose.model('Tasks',TaskScheme);
module.exports = Task;