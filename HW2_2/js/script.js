function getFirstNumber(){
    let firstNumber = prompt("Please, enter the first positive, integer number, bigger then 1");

    while ((Number(firstNumber))<=1 || !Number.isInteger(Number(firstNumber))){
        firstNumber = prompt("Please, enter the first positive, integer number, bigger then 1");
    }
    return Number(firstNumber);
}
function getSecondNumber(firstNumber){
    let secondNumber = prompt("Please, enter the second positive, integer number, bigger then " + firstNumber);

    while ((Number(secondNumber))<=firstNumber || !Number.isInteger(Number(secondNumber))){
        secondNumber= prompt("Please, enter the second positive, integer number, bigger then " + firstNumber);
    }
    return Number(secondNumber);
}
function simpleNum(number1, number2) {
    let count = 0;
    for (let i = number1; i <= number2; i++){
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
let secondNumber = getSecondNumber(firstNumber);
simpleNum(firstNumber, secondNumber);