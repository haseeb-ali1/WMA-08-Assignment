//1. Write a js program to find length of a string.
let str = "Hello World";
console.log(str.length);
//2. Write a js program to copy one string to another string.
let str1 = "Hello World";
let str2 = str1;
console.log(str2);
//3. Write a js program to concatenate two strings.
let str1 = "Hello";
let str2 = "World";
console.log(str1 + " " + str2);
//4. Write a js program to compare two strings.
let str1 = "Hello";
let str2 = "World";
if (str1 === str2) {
    console.log("Both strings are equal");
} else {
    console.log("Both strings are not equal");
}   
//5. Write a js program to convert lowercase string to uppercase.
let str = "hello world";
console.log(str.toUpperCase());
//6. Write a js program to convert uppercase string to lowercase.
let str = "HELLO WORLD";
console.log(str.toLowerCase());
//7. Write a js program to toggle case of each character of a string.
let str = "Hello World";
let toggle = "";
for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
        toggle += str[i].toLowerCase();
    } else {
        toggle += str[i].toUpperCase();
    }
}
console.log(toggle);
//8. Write a js program to find total number of alphabets, digits or special character in a string.
let str = "Hello World 123!";
let alphabets = 0;
let digits = 0;
let special = 0;
for (let i = 0; i < str.length; i++) {
    if ((str[i] >= 'a' && str[i] <= 'z')||(str[i] >= 'A' && str[i] <= 'Z')) {
        alphabets++;
    } else if (str[i]>='0'&& str[i] <='9'){
        digits++;
    } else {
        special++;
    }
}
console.log("Alphabets: " + alphabets);
console.log("Digits: " + digits);
console.log("Special Characters: " + special);
//9. Write a js program to count total number of vowels and consonants in a string.
let str = "Hello World";
let vowels = 0;
let consonants = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' || str[i] === 'A' || str[i] === 'E' || str[i] === 'I' || str[i] === 'O' || str[i] === 'U') {
        vowels++;
    } else {
        consonants++;
    }
}
console.log("Vowels: " + vowels);
console.log("Consonants: " + consonants);
//10. Write a js program to count total number of words in a string.
let str = "Hello World";
let words = 1;
for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
        words++;
    }
}
console.log("Words: " + words);
//11. Write a js program to find reverse of a string.
let str = "Hello World";
let reverse = "";
for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
}
console.log(reverse);
//12. Write a js program to find reverse of a number.
let num = 12345;
let reverse = 0;
while (num > 0) {
    reverse = reverse * 10 + num % 10;
    num = Math.floor(num / 10);
}
console.log(reverse);
//13. Write a js program to check whether a string is palindrome or not.
let str = "madam";
let reverse = "";
for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
}
if (str === reverse) {
    console.log("Palindrome");
}
else {
    console.log("Not Palindrome");
}
//14. Write a js program to check whether a number is palindrome or not.
let num = 12321;
let temp = num;
let reverse = 0;
while (num > 0) {
    reverse = reverse * 10 + num % 10;
    num = Math.floor(num / 10);
}
if (temp === reverse) {
    console.log("Palindrome");
}
else {
    console.log("Not Palindrome");
}
//15. Write a js program to find first occurrence of a character in a given string.
let str = "Hello World";
let char = 'o';
let index = -1;
for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
        index = i;
        break;
    }
}
console.log("Occurrence: " + index);
//16. Write a js program to find last occurrence of a character in a given string.
let str = "Hello World";
let char = 'o';
let index = -1;
for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
        index = i;
    }
}
console.log("Occurrence: " + index);
//17. Write a js program to find frequency of each character in a given string.
let str = "Hello World";
let freq = {};
for (let i = 0; i < str.length; i++) {
    if (freq[str[i]]) {
        freq[str[i]]++;
    } else {
        freq[str[i]] = 1;
    }
}
for (let key in freq) {
    console.log(key + " -> " + freq[key]);
}
//18. Write a js program to remove first occurrence of a character from string.
let str = "Hello World";
let char = 'o';
let index = -1;
for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
        index = i;
        break;
    }
}
let first = str.slice(0, index);
let second = str.slice(index + 1);
let result = first + second;
console.log(result);
//19. Write a js program to remove last occurrence of a character from string.
let str = "Hello World";
let char = 'o';
let index = -1;
for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
        index = i;
    }
}
let first = str.slice(0, index);
let second = str.slice(index + 1);
let result = first + second;
console.log(result);
//20. Write a js program to remove all occurrences of a character from string.
let str = "Hello World";
let char = 'o';
let result = "";
for (let i = 0; i < str.length; i++) {
    if (str[i] !== char) {
        result += str[i];
    }
}
console.log(result);
//21. Write a js program to replace first occurrence of a character with another in a string.
let str = "Hello World";
let char = 'o';
let replace = '0';
let index = -1;
for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
        index = i;
        break;
    }
}
let first = str.slice(0, index);
let second = str.slice(index + 1);
let result = first + replace + second;
console.log(result);
//22. Write a js program to replace last occurrence of a character with another in a string.
let str = "Hello World";
let char = 'o';
let replace = '0';
let index = -1;
for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
        index = i;
    }
}
let first = str.slice(0, index);
let second = str.slice(index + 1);
let result = first + replace + second;
console.log(result);
//23. Write a js program to replace all occurrences of a character with another in a string.
let str = "Hello World";
let char = 'o';
let replace = '0';
let result = "";
for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
        result += replace;
    } else {
        result += str[i];
    }
}
console.log(result);
//24. Write a js program to find frequency of each word in a string.
let str = "Hello World Hello";
let words = str.split(" ");
let freq = {};
for (let i = 0; i < words.length; i++) {
    if (freq[words[i]]) {
        freq[words[i]]++;
    } else {
        freq[words[i]] = 1;
    }
}
for (let key in freq) {
    console.log(key + "=" + freq[key]);
}
//25. Write a js program to remove all extra blank spaces from a given string.
let str = "Hello    World";
let result = str.replace(/\s+/g, ' ');
console.log(result);
//26. Write a js program to remove all white spaces from a given string.
let str = "Hello World";
let result = str.replace(/\s+/g, '');
console.log(result);
//27. Write a js program to find first occurrence of a word in a given string.
let str = "Hello World Hello";
let word = "Hello";
let index = str.indexOf(word);
console.log(index);
//28. Write a js program to find last occurrence of a word in a given string.
let str = "Hello World Hello";
let word = "Hello";
let index = str.lastIndexOf(word);
console.log(index);
//29. Write a js program to find total number of words in a string.
let str = "Hello World";
let words = str.split(" ");
console.log(words.length);
//30. Write a js program to swap first and last word of a string.
let str = "Hello World";
let words = str.split(" ");
let temp = words[0];
words[0] = words[words.length - 1];
words[words.length - 1] = temp;
let result = words.join(" ");
console.log(result);

