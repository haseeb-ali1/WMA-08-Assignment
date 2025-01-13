//1. Write a js program to find maximum between two numbers.
function max(num1, num2){
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
const number1 = 10;
const number2 = 20;
console.log("The max number is: " + max(number1, number2));
//2. Write a js program to find maximum between three numbers.
function max(num1, num2, num3){
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}
console.log("The max number is: " + max(10, 20, 30));
//3. Write a js program to check whether a number is negative, positive or zero.
function number(num){
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}
console.log(number(10));
//4. Write a js program to check whether a number is divisible by 5 and 11 or not.
function number(num){
    if (num % 5 === 0 && num % 11 === 0) {
        return "Divisible by 5 and 11";
    } else {
        return "Not divisible by 5 and 11";
    }
}
console.log(number(55));
//5. Write a js program to check whether a number is even or odd.
function number(num){
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(number(10));
//6. Write a js program to check whether a year is leap year or not.
function leap(year){
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "Leap Year";
            } else {
                return "Not a Leap Year";
            }
        } else {
            return "Leap Year";
        }
    } else {
        return "Not a Leap Year";
    }
}
console.log(leap(2020));
//7. Write a js program to check whether a character is alphabet or not.
function character(char){
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
        return "Alphabet";
    } else {
        return "Not an Alphabet";
    }
}
console.log(character('a'));
//8. Write a js program to input any alphabet and check whether it is vowel or consonant.
function character(char){
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
        return "Vowel";
    } else {
        return "Consonant";
    }
}
console.log(character('a'));
//9. Write a js program to input any character and check whether it is alphabet, digit or special character.
function character(char){
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
        return "Alphabet";
    } else if (char >= '0' && char <= '9') {
        return "Digit";
    } else {
        return "Special Character";
    }
}
console.log(character('a'));
//10. Write a js program to check whether a character is uppercase or lowercase alphabet.
function character(char){
    if (char >= 'a' && char <= 'z') {
        return "Lowercase";
    } else if (char >= 'A' && char <= 'Z') {
        return "Uppercase";
    } else {
        return "Not an Alphabet";
    }
}
console.log(character('a'));
//11. Write a js program to input week number and print week day.
function week(Num){
    switch(Num){
        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        case 7:
            return "Saturday";
        default:
            return "Invalid Number";
    }
}
console.log(week(1));
//12. Write a js program to input month number and print number of days in that month.
function days(month) {
    switch(month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            return 31;
        case 4: case 6: case 9: case 11:
            return 30;
        case 2:
            return 28;
        default:
            return "Invalid Month";
    }
}
console.log(days(2));
//13. Write a js program to count total number of notes in given amount.
function countNotes(amount){
    let count = 0;
    let notes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    for (let i = 0; i < notes.length; i++) {
        if (amount >= notes[i]) {
            let c = Math.floor(amount / notes[i]);
            count += c;
            amount = amount - c * notes[i];
        }
    }
    return count;
}
console.log(countNotes(2510));
//14. Write a js program to input angles of a triangle and check whether triangle is valid or not.
function Tri(angle1, angle2, angle3){
    if (angle1 + angle2 + angle3 === 180) {
        return "Valid Triangle";
    } else {
        return "Invalid Triangle";
    }
}
console.log(Tri(60, 60, 60));
//15. Write a js program to input all sides of a triangle and check whether triangle is valid or not.
function Tri(side1, side2, side3){
    if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
        return "Valid Triangle";
    } else {
        return "Invalid Triangle";
    }
}
console.log(Tri(3, 4, 5));
//16. Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.
function Tri(side1, side2, side3){
    if (side1 === side2 && side2 === side3) {
        return "Equilateral Triangle";
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
        return "Isosceles Triangle";
    } else {
        return "Scalene Triangle";
    }
}
console.log(Tri(3, 3, 3));
//17. Write a js program to find all roots of a quadratic equation.
function roots(a, b, c){
    let d = b * b - 4 * a * c;
    let sqrt_val = Math.sqrt(Math.abs(d));
    if (d > 0) {
        return `Roots are real and different: ${(-b + sqrt_val) / (2 * a)} and ${(-b - sqrt_val) / (2 * a)}`;
    } else if (d === 0) {
        return `Roots are real and same: ${-b / (2 * a)}`;
    } else {
        return `Roots are complex: ${-b / (2 * a)} + i${sqrt_val} and ${-b / (2 * a)} - i${sqrt_val}`;
    }
}  
console.log(roots(1, -7, 12));
//18. Write a js program to calculate profit or loss.
function profit(price, cost){
    if (price > cost) {
        return "Profit";
    } else if (cost > price) {
        return "Loss";
    } else {
        return "No Profit No Loss";
    }
}
console.log(profit(100, 200));
//19. Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following.
function grade(physics, chemistry, biology, mathematics, computer){
    let total = physics + chemistry + biology + mathematics + computer;
    let percentage = total / 5;
    if (percentage >= 90) {
        return "A";
    } else if (percentage >= 80) {
        return "B";
    } else if (percentage >= 70) {
        return "C";
    } else if (percentage >= 60) {
        return "D";
    } else if (percentage >= 40) {
        return "E";
    } else {
        return "F";
    }
}
console.log(grade(90, 80, 70, 60, 50));
//20. Write a js program to input basic salary of an employee and calculate its Gross salary according to following.
function Gross(basicSalary){
    let hra = basicSalary * 0.2;
    let da = basicSalary * 0.4;
    return basicSalary + hra + da;
}
console.log(Gross(10000));
//21. Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition.
function bill(units){
    let bill = 0;
    if (units <= 50) {
        bill = units * 0.5;
    } else if (units <= 150) {
        bill = 25 + (units - 50) * 0.75;
    } else if (units <= 250) {
        bill = 100 + (units - 150) * 1.2;
    } else {
        bill = 220 + (units - 250) * 1.5;
    }
    return bill;
}
console.log(bill(100));