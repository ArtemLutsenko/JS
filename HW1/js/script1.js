function getName() {
    let getUserName = prompt("What is your name?");
    while (getUserName === null) {
        getUserName = prompt("What is your name?", getUserName);
    }
    return getUserName;
}


function validationNumber(num) {
    if (Number(num)) {
        return true;
    } else
        return false;
}

function getYearBirth() {
    let userYearBirth = prompt("How old are you?")

    while (!validationNumber(userYearBirth)) {
        userYearBirth = prompt("You incorrectly entered you date of birthd, please, try one more time", userYearBirth);
    }
    return userYearBirth;
}



let userName = getName();
let yearBirth = getYearBirth();
yearBirth = Number(yearBirth);

if (yearBirth < 18) {
    alert("You are not allowed to visit this website");
} else
    if (yearBirth >= 18 && yearBirth < 22) {
        if (confirm("Are you sure you want to continue?")) {
            alert("Welcome, " + userName);
        } else {
            alert("You are not allowed to visit this website");            
        }
} else if (yearBirth >= 22) {
    alert("Welcome, " + userName);
}