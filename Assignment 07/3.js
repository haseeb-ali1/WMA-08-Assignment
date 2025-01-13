const prompt = require('prompt-sync')();
// Ask the user to input the temperature in Celsius
let temperature = parseFloat(prompt("Enter the temperature in Celsius: "));
if (temperature <= 0) {
    console.log("Freezing");
} else if (temperature > 0 && temperature <= 15) {
    console.log("Cold");
} else if (temperature > 15 && temperature <= 30) {
    console.log("Warm");
} else if (temperature > 30) {
    console.log("Hot");
}

