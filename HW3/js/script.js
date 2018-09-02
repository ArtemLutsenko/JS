function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

function getNumber(){
    let number = prompt("Please, enter the positive, integer number, bigger then 1");

    while (!Number.isInteger(Number(number))){
        number = prompt("Please, enter the  positive, integer number, bigger then 1");
    }
    return Number(number);
}
let number =getNumber();
alert(factorial(number));