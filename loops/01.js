let numbers = [1, -2, 3, -4, 5, 6, -7, -8, 9, 10];
let positiveNumberCount = 0;

for (let num of numbers) {
    if (num > 0) {
        positiveNumberCount++;
    }
}

console.log("Final count of Positive numbers is: ", positiveNumberCount);
