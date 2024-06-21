let number = 5;
let factorial = 1;

while (number > 0) {
    factorial *= number;
    number -= 1;
}

console.log("Factorial: ", factorial);
