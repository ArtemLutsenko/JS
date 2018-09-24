function calcWorkingDays(startDate, endDate) { 
    
    let workingDays = 0;
   
    while (startDate <= endDate ) {
      if (startDate.getDay()!=0 && startDate.getDay()!=6){
           workingDays++;
        }
        startDate.setDate(startDate.getDate() + 1);
    }
    
    return workingDays;
  }




function inTimeOrNot(speedOfWork, listOfTask, deadLine){
    let storyPointDay = 0;
    let sumOfTask = 0;
    let today = new Date();
    deadLine = new Date(deadLine);
    let result = 0;    
    for(let key in speedOfWork){
        storyPointDay += speedOfWork[key];
    }
    for(let key in listOfTask){
        sumOfTask += listOfTask[key];
    }
    let amountOfTimeDay = calcWorkingDays(today, deadLine);
    result = Math.ceil(amountOfTimeDay - sumOfTask / (Math.floor(storyPointDay)))

    if(result < 0){
        console.log('Команде разработчиков придется потратить дополнительно ' + Math.abs(Math.ceil(result * 8)) + ' часов после дедлайна, чтобы выполнить все задачи в беклоге');
    }
    else if(result > 0){
        console.log('Все задачи будут успешно выполнены за ' + result + ' дней до наступления дедлайна!');
    }
    else console.log('Just in time)))'); 
    return true;
}

let speedOfWork = [10,20,30];
let listOfTask = [100,200,300];
let deadLine = '10.04.2018';



console.log(inTimeOrNot(speedOfWork, listOfTask, deadLine));