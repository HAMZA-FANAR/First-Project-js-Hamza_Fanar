const usersDatabase = [];

class User {
    constructor(name, email, age, password) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.password = password;
    }
}

function asking() {
    let askUser = prompt("choose an option : signing up , logging in , change password , Exit");
    switch (askUser) {
        case "signing up":
            signUp();
           
            break;
        case "logging up":
            logeIn ();
           
            break
            case "change password":
                change ();
               
                break
        case "Exit":
            console.log('rak khrjti')
            break
    
        default:
           alert("choose one of availabe options")
           
    }
}


const signUp =()=>{
    var askName = prompt("Enter your Full name").trim();
    askName = askName.charAt(0).toUpperCase() + askName.slice(1).toLowerCase();
    if (!validateName(askName)) {
        console.log("your name is short. Please try again.");
        return;
    }else{
        console.log(askName);
    }
   



   let email = prompt("Enter your email:");

   if (!validateEmail(email)) {
    console.log("Please try again.");
    return;
   }
   
 
   let age = parseInt(prompt("Enter your age:"));
   if (!validateAge(age)) {
    console.log("Invalid age. Please try again.");
    return;
}
 
   let password = prompt("Enter a password:");
   if (!validatePassword(password)) {
    console.log("Invalid password. Please try again.");
    return;
}
 
   let confirmPassword = prompt("Confirm your password:");
   if (password !== passwordConfirmed) {
    console.log("machi nfs password. Please try again.");
    return;
}
}

function validateName(askName) {
    return /^[A-Z][a-z]*([ ][A-Z][a-z]*){1,}$/.test(askName) && askName.length >= 5;
}
function validateEmail(email) {
    return /^[a-z][a-z0-9]*@[a-z]+\.[a-z]{2,}$/.test(email) && !usersDatabase.find(user => user.email === email);
}

function validateAge(age) {
    return /^\d{1,2}$/.test(age) && age.length < 3;
}

function validatePassword(password) {
    return /[@#\-\+\*\/]/.test(password) && password.length >= 7 && !/\s/.test(password);
}

asking()

signUp()



