const prompt = require('prompt-sync')();
let password = prompt("Enter your password: ");
if (password.length >= 8) {
    console.log("Strong Password");
} else if (password.length >= 5 && password.length <= 7) {
    console.log("Moderate Password");
} else {
    console.log("Weak Password");
}

