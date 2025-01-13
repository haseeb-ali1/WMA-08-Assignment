const prompt = require('prompt-sync')();
let weather = prompt("Enter the weather condition (Sunny, Rainy, Cold): ");
if (weather.toLowerCase() === 'sunny') {
    console.log("Wear sunglasses");
} else if (weather.toLowerCase() === 'rainy') {
    console.log("Take an umbrella");
} else if (weather.toLowerCase() === 'cold') {
    console.log("Wear a jacket");
} else {
    console.log("Invalid weather input");
}
