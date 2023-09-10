const score = localStorage.getItem('score'); // Приняли номер поста из local Storage
const dataHeader = localStorage.getItem('show_header'+score); // Приняли заголовок из local Storage
const dataText = localStorage.getItem('show_text'+score); // Приняли текст поста из local Storage
const dataDate = localStorage.getItem('Date'+score); // Приняли дату создания из local Storage
const dataDateCh = localStorage.getItem('show_data_ch'+score); // Приняли дату создания из local Storage
const main = document.getElementById('list_notes'); // Выбираем в какой блок будем вносить
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

const form = document.getElementById('form2');
formFileds = form.elements;

formFileds[0].value = dataHeader;
formFileds[1].value = dataText;
formFileds[2].value = dataDate;
formFileds[3].value = dataDateCh;

btn1.addEventListener('click', FindHandler);
btn2.addEventListener('click', DeleteHandler);


function FindHandler()
{
    let t = 0;
    for (let i = 0; i <= localStorage.getItem('score'); i++ ) // Функция поиска
    {  
        if (formFileds[0].value == localStorage.getItem('show_header'+i) && i <= localStorage.getItem('score'))
        {
        formFileds[1].value = localStorage.getItem('show_text'+i);
        formFileds[2].value = localStorage.getItem('Date'+i);
        }  
        else{t++;} 
    }
    if(t > localStorage.getItem('score')){
        alert('Запись не найдена');
    }
}

function DeleteHandler()
{
    formFileds[0].value = null;
    formFileds[1].value = null;
    formFileds[2].value = null;  
    formFileds[3].value = null;  
}