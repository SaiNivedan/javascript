function greet(name = "User") {
    return "Hello, " + name + "!";
}

console.log(greet("chai")); // Output: Hello, chai!
console.log(greet());       // Output: Hello, User!
