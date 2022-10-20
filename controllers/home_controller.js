module.exports.home = function(req,res){
    console.log('home_controller is started...');
    return res.render('todopage',{
        title: "TODO APP"
    });
}