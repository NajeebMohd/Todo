const db = require('../config/mongoose');
const Tasks = require('../models/task');

// Tasks.create({discription:'first task',category:'school'});

module.exports.home = function(req,res){
    // console.log('home_controller is started...');
    // return res.render('todopage',{
    //     title: "TODO APP",
    //     Task : Tasks

    // });
    Tasks.find({}, function(err,data){
        if(err){console.log('got an error fetching the data in the database',err); return;}
        return res.render('todopage',{
            title : "todo appd",
            task : data
        });
    });
}

module.exports.addTask = function(req,res){
    console.log(req.body,'<<-- the req.body');
    if(err){console.log('error in adding the tasks addTask()'); return;}
    return res.render('todopage',{});
}