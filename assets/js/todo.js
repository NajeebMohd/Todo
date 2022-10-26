console.log('js file is running');

var deleteBtn = document.getElementById('deleteBtn');

var checkBox = document.querySelectorAll('#tasks input');
var ids = [];

// ------------------ WHEN CLICK ADDING THE ID'S TO URL --------------- //
deleteBtn.addEventListener('click',function(event){
    event.stopPropagation();
    console.log('int the href...');
    for(let i = 0; i < checkBox.length; i++){
        if(checkBox[i].checked == true){
            ids.push(checkBox[i].value);
        }
    }    
    window.location.href = 'http://localhost:8000/delete-task/?checkbox='+ids;
});