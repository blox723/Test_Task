const form = document.getElementById('form1');
const formFileds = form.elements;
let createDate = new Date().toLocaleDateString();
let score = [];
let i = 1;


formFileds[2].addEventListener('click', changeHandler);
formFileds[4].addEventListener('click', deleteHandler);
formFileds[5].addEventListener('click', ReWreiteHandler);


function changeHandler() {
if(localStorage.getItem('score') == null){   //Алгортим счетчика постов
score[i]=i;
localStorage.setItem('score', score[i]);
}
else{
    i = localStorage.getItem('score');
    i++;
    score[i]=i;
    localStorage.setItem('score', score[i]);
}

localStorage.setItem('show_header'+i, formFileds[0].value); // Запись данных в locale Sorage
localStorage.setItem('show_text'+i, formFileds[1].value);
localStorage.setItem('Date'+i, createDate);



}

function deleteHandler() { //Удаление locale Storage
localStorage.clear();
}



let write = 0;
let changeDate = new Date().toLocaleDateString();
formFileds[3].addEventListener('click', FindHandler2);


function FindHandler2() 
{
    let t = 0;
    for (let i = 0; i <= localStorage.getItem('score'); i++ ) // Функция поиска
    {  
        if (formFileds[0].value == localStorage.getItem('show_header'+i) && i <= localStorage.getItem('score'))
        {
        formFileds[1].value = localStorage.getItem('show_text'+i);
        }  
        else
        {
            t++;
            write = t;
        } 
    }
    if(t > localStorage.getItem('score')){
        alert('Запись не найдена');
    }
    
    
}
    
function ReWreiteHandler()
{ 
localStorage.setItem('show_header'+write, formFileds[0].value);
localStorage.setItem('show_text'+write, formFileds[1].value);
localStorage.setItem('show_data_ch'+write, createDate);
write = 0;
}  
        
