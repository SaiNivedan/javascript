let age = 26;
let day = "Wednesday";

let price = age >= 18 ? 12 : 8;

if (day === "Wednesday") {
    price -= 2;
}

console.log("Ticket price for you is $", price);
