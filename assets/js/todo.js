console.log('js file is running');

var deleteBtn = document.getElementById('deleteBtn');

var checkBox = document.querySelectorAll('#tasks input');
var ids = [];

// for(let i = 0; i < checkBox.length; i++){
//     checkBox[i].addEventListener('click',function(){
//         //console.log('ista happening');
//         if(checkBox[i].checked == true){
//             console.log('its hapeening');

//         }
//     });
//     console.log(checkBox[i].value,'<<-- the check box');
// }

deleteBtn.addEventListener('click',function(){
    console.log('int the href...');
    window.location.href = 'http://localhost:8000/delete-task/?checkbox='+checkBox;
});