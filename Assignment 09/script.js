//1:Write a js program to print all natural numbers from 1 to n.using while loop
function num(n) {
    let num = 1;
    while (num <= n) {
        console.log(num);
        num++;
    }
}
console.log(num(30));
//2:Write a js program to print all natural numbers in reverse (from n to 1). - using while loop.
function num(n){
    let num=n;
    while(num >= 1){
        console.log(num);
        num--;
    }
}
console.log(num(15));
//3:Write a js program to print all alphabets from a to z. - using while loop.
function char() {
    let charCode = 97;
    while (charCode <= 122){
        console.log(String.fromCharCode(charCode));
        charCode++;
    }
}
console.log(char());
//4:Write a js program to print all even numbers between 1 to 100. - using while loop.
function even(){
    let num = 2;
    while (num <= 100) {
        console.log(num);
        num += 2;
    }
}
console.log(even());
//5:Write a js program to print all odd number between 1 to 100.
function odd(){
    let num=1;
    while(num<100){
        console.log(num);
        num=num+2;
    }
}
console.log(odd());
//6:Write a js program to find sum of all natural numbers between 1 to n.
function sum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sum(3));
//7:Write a js program to find sum of all even numbers between 1 to n.
function even(n) {
    let sum = 0;
    for (let i = 2; i <= n; i += 2) {
        sum += i;
    }
    return sum;
}
console.log(even(10));
//8:Write a js program to find sum of all odd numbers between 1 to n.
function odd(n) {
    let sum = 0;
    for (let i = 1; i <= n; i += 2) {
        sum += i;
    }
    return sum;
}
console.log(odd(10));
//9:Write a js program to print multiplication table of any number.
function table(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num * i}`);
    }
}
console.log(table(5));
//10:Write a js program to count number of digits in a number.
function count(num) {
    let count = 0;
    while (num != 0) {
        num=Math.floor(num / 10);
        count++;
    }
    return count;
}
console.log(count(123));
//15:Write a js program to calculate product of digits of a number.
function product(num){
    let product=1;
    while (num!=0){
        product*=num%10;
        num = Math.floor(num/10);
    }
    return product;
}
console.log(product(478));  
//20: Write a js program to print all ASCII character with their values.
function ASCIIchar() {
    for (let i = 0; i <= 127; i++) {
        console.log(String.fromCharCode(i));
    }
}
console.log(ASCIIchar());
//21: Write a js program to find power of a number using for loop.
function power(base, exponent) {
    let r = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

console.log(power(2, 3)); 
//23:Write a js program to calculate factorial of a number.
function fac(n){
    if (n==0||n==1) {
        return 1;
    }
    return n*fac(n-1);
}
console.log(fac(5));
//25:Write a js program to find LCM of two numbers.
function lcm(a,b) {
    function gcd(x,y) {
        while (y) {
            let temp = y;
            y = x % y;
            x = temp;
        }
        return x;
    }
    return (a*b)/gcd(a,b);
}
console.log(lcm(6,9));
//27:Write a js program to print all Prime numbers between 1 to n.
function prime(num){
    for (let i=2;i<=num;i++){
        let isPrime=true;
        for (let j=2;j<=num/2;j++){
            if(i%j==0){
                isPrime=false;
                break;
            }
        }
        if(isPrime){
            console.log(i);
        }
    }
}
console.log(prime(30));
//28:Write a js program to find sum of all prime numbers between 1 to n.
function prime(n) {
    let sum=0;
    for (let i=2;i<=n;i++) {
        let Prime=true;
        for(let j=2;j<=num/2;j++){
            if(i%j==0){
                Prime=false;
                break;
            }
        }
        if(Prime){
            sum+=i;
        }
    }
    return sum;
}
console.log(prime(30));

//32:Write a js program to check whether a number is Perfect number or not.
function perfect(num) {
    let sum = 0;
    for (let i=1; i<=num/2;i++){
        if (num%i==0){
            sum+=i;
        }
    }
    return sum==num && num!==0;
}
console.log(perfect(28));
//33:Write a js program to find perfect numbers between 1 to 100.
function perfectnum() {
    for(let i=1; i<=100;i++) {
        let sum=0;
        for(let j=1; j<=i/2;j++){
            if(i%j==0) {
            sum+=j;
            }
        }
        if(sum==i) {
        console.log(i);
        }
    }
}
console.log(perfectnum());
//34:Write a js program to find Armstrong number between 1 to 500.
function armstrong() {
    for(leti=1;i<=500;i++) {
        let sum=0;
        let temp=i;
        while(temp>0) {
            let rem=temp%10;
            sum+=rem*rem*rem;
            temp=parseInt(temp/10);
        }
        if(sum==i){
            console.log(i);
        }
    }
}
console.log(armstrong());
//34:Write a js program to check whether a number is Strong number or not.
function strong(num){
    let temp=num;
    let sum=0;
    while(temp>0){
        let rem=temp%10;
        sum+=fact(rem);
        temp=parseInt(temp/10);
    }
    return sum==num;
}
strong(140);
//36:Write a js program to print Fibonacci series up to n terms.
function fibonacci(n) {
    let num1=0;
    let num2=1;
    let nextnum;
    for (let i = 1; i <= n; i++) {
        console.log(num1);
        nextnum = num1 + num2;
        num1 = num2;
        num2 = nextnum;
    }
}
console.log(fibonacci(5));