let distance = 5;
let transport;

if (distance < 3) {
    transport = "Walk";
} else if (distance <= 15) {
    transport = "Bike";
} else {
    transport = "Car";
}

console.log("AI recommends you the transport of: ", transport);
