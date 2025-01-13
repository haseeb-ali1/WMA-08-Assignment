const prompt = require('prompt-sync')();
let lightColor = prompt("Enter the traffic light color (Red, Yellow, Green): ");
if (lightColor.toLowerCase() === 'red') {
    console.log("Stop");
} else if (lightColor.toLowerCase() === 'yellow') {
    console.log("Slow Down");
} else if (lightColor.toLowerCase() === 'green') {
    console.log("Go");
} else {
    console.log("Invalid Color");
}




