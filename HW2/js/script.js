function getFirstNumber(){
    let firstNumber = prompt("Please, enter the first positive, integer number, bigger then 1");

    while ((Number(firstNumber))<=1 || !Number.isInteger(Number(firstNumber))){
        firstNumber = prompt("Please, enter the first positive, integer number, bigger then 1");
    }
    return Number(firstNumber);
}

function simpleNum(number) {
    let count = 0;
    for (let i = 2; i <= number; i++){
        for(let j = 2; i/2 >= j; j++ ){
            if(i % j == 0){
                count++;
            }
        }
        if(count < 1){
            console.log(i);
        }
        count=0;
    }
}

let firstNumber = getFirstNumber();
simpleNum(firstNumber);
