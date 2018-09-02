function createNewUser() {
    let fName = prompt("Enter first name");
    let lName = prompt("Enter last name");

    let User={
      firstName : fName,
        lastName : lName
    };
    User.getLogin= function(){
        return this.firstName.charAt(0).toLowerCase()+this.lastName.toLowerCase();
    }
    return User;
}
let user = createNewUser();
alert(user.getLogin());