
function isValid(dateOfBirth){
    let fDateOfBirth = dateOfBirth.split('.');
    const date = new Date();
    if((fDateOfBirth[0] >= 0 && fDateOfBirth[0] <= 31) 
    && (fDateOfBirth[1] >= 0 && fDateOfBirth[1] <= 12)
    &&(fDateOfBirth[2] >= 0 && fDateOfBirth[2] <= date.getFullYear)){
        return true;
    }
    else 
        return false;
}
function getDateOfBirth(){
    while(true){
     let dateOfBirth = prompt("Please, enter your date of birth, format dd.mm.yyyy");
     if(isValid(dateOfBirth)){
         return dateOfBirth;
         break;
     }        
     }
 }
function zodiak(dateOfBirth){
    const zodiacList = [
        [1, 'iWwWj'],
        [19, 'Козерог (22.12–19.1)'],
        [18, 'Водолей (20.1–18.2)'],
        [20, 'Рыбы (19.2–20.3)'],
        [19, 'Овен (21.3–19.4)'],
        [20, 'Телец (20.4–20.5)'],
        [21, 'Близнецы (21.5–21.6)'],
        [22, 'Рак (22.6–22.7)'],
        [22, 'Лев (23.7–22.8)'],
        [22, 'Дева (23.8–22.9)'],
        [22, 'Весы (23.9–22.10)'],
        [22, 'Скорпион (23.10–22.11)'],
        [21, 'Стрелец (23.11–21.12)']
    ];
    splitedDateOfBirth = dateOfBirth.split('.');
    let dayOfBirth = splitedDateOfBirth[0];
    let monthofBirth = splitedDateOfBirth[1];
    
    if (dayOfBirth > zodiacList[monthofBirth][0]) {
        monthofBirth++;}
    if (monthofBirth > 12) {
        monthofBirth = 1;}
    return zodiacList[monthofBirth][1]; 
}
function fullYear(dateOfBirth){
    let splitedDateOfBirth = dateOfBirth.split('.');
    let date = new Date(splitedDateOfBirth[1] + '.' + splitedDateOfBirth[0] + "." + splitedDateOfBirth[2]);
    console.log(date + 'data');
    let currentDate = new Date();
    let diff =((currentDate.getTime() - new Date(date))/(3600 * 24 * 1000 ))
    return Math.floor(diff/365);
}
let dateOfBirth = getDateOfBirth();
console.log(dateOfBirth);
alert("Вам " + fullYear(dateOfBirth) + ' лет!');
alert('Ваш знак зодиака: ' + zodiak(dateOfBirth));



