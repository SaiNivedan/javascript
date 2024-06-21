function sumAll(...args) {
    console.log(args);
    for (let i of args) {
        console.log(i * 2);
    }
    return args.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumAll(1, 2, 3)); // Output: [1, 2, 3] followed by 2, 4, 6 and 6
// console.log(sumAll(1, 2, 3, 4, 5)); // if run
