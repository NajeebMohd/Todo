const { response } = require('express');
const db = require('../config/mongoose');
const Tasks = require('../models/task');

// Tasks.create({discription:'first task',category:'school'});

//  -------------------- REQUEST FOR HOME --------------------------- //
module.exports.home = function(req,res){
    console.log('home_controller is started...');
    
    Tasks.find({}, function(err,data){
        if(err){console.log('got an error fetching the data in the database',err); return;}
        return res.render('todopage',{
            title : "Todo App",
            task : data
        });
    });
}

// ----------------------- REQUEST FOR ADDING TASK ---------------------- //
module.exports.addTask = function(req,res){
    console.log(req.body,'<<-- the req.body');    
    // return res.redirect('back');
    Tasks.create({
        discription: req.body.work,
        category: req.body.select_cat,
        date: req.body.date
    }, function(err,newTask){
        if(err){console.log('error while creating a task in database addTask()..',err); return;}
        console.log('task added sucessfully',newTask);
        return;
    });
    return res.redirect('back');    
}

// --------------------------- REQUEST FOR DELETING TASKS ---------------------//
module.exports.deleteTask = function(req,res){
    var checkbox = req.query.checkbox+',';
    
    var count = 25;
    while(count <= checkbox.length){
        var id = checkbox.slice(count-25,count).slice(0,-1);
        Tasks.findByIdAndDelete(id,function(err){
            if(err){console.log('error in deleting the tasks deleteTask()'); return;}
            return;
        });
        count+=25;
    }    
    res.redirect('back');
}