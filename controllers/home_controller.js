const { response } = require('express');
const db = require('../config/mongoose');
const Tasks = require('../models/task');

// Tasks.create({discription:'first task',category:'school'});

module.exports.home = function(req,res){
    console.log('home_controller is started...');
    
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
    // return res.redirect('back');
    Tasks.create({
        discription: req.body.work,
        category: req.body.select_cat,
        date: req.body.date
    }, function(err,newTask){
        if(err){console.log('error while creating a task in database addTask()..'); return;}
        console.log('task added sucessfully',newTask);
        return;
    });
    return res.redirect('back');    
}


module.exports.deleteTask = function(req,res){
    var checkbox = req.query.checkbox;
    for(let i = 0; i < checkbox.length; i++){
        console.log(checkbox[i],'seperate check box');
        // if(checkbox[i].checked == true){
        //     Tasks.findByIdAndDelete(checkbox[i].value,function(err){
        //         if(err){console.log('error in deleting the database deleteTask()'); return;}
        //         return;
        //     });
        // }
    }
    res.redirect('back');
}