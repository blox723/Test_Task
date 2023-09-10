let score = localStorage.getItem('score'); // Приняли номер поста из local Storage
let main = document.getElementById('list_notes'); // Выбираем в какой блок будем вносить
let MyInputHeader = [];
let MyInputDate = [];
let MyInputDateCh = [];
let Zero = [];


for(let i = 1; i <= score; i++){

let dataHeader = localStorage.getItem('show_header'+i); // Приняли заголовок из local Storage
let dataDate = localStorage.getItem('Date'+i); // Приняли дату создания из local Storage
let dataDateCh = localStorage.getItem('show_data_ch'+i); // Приняли дату изменения из local Storage

MyInputHeader[i] = document.createElement('input'); //Создание поля с заголовком
MyInputDate[i] = document.createElement('input'); //Создание поля с датой создания
MyInputDateCh[i] = document.createElement('input'); //Создание поля с датой изменения

MyInputHeader[i].setAttribute('class','list_notes__li');
MyInputHeader[i].setAttribute('value',dataHeader);
main.appendChild(MyInputHeader[i]);

MyInputDate[i].setAttribute('class','list_notes__li');
MyInputDate[i].setAttribute('value',dataDate);
main.appendChild(MyInputDate[i]);

MyInputDateCh[i].setAttribute('class','list_notes__li');
MyInputDateCh[i].setAttribute('value',dataDateCh);
main.appendChild(MyInputDateCh[i]);

Zero[i] = document.createElement('p');
main.appendChild(Zero[i]);
}
