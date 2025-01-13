const prompt = require('prompt-sync')();
let userInput = prompt("Enter 1 to turn the light ON, or 0 to turn it OFF:");
if (userInput === '1') {
    console.log("The light is ON");
} else if (userInput === '0') {
    console.log("The light is OFF");
} else {
    console.log("Invalid Input");
}
