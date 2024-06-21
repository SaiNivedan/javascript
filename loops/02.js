let n = 10;
let sumEven = 0;

for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    }
}

console.log("Sum of even numbers is: ", sumEven);
