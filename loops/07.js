const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function getNumber() {
    readline.question("Enter value between 1 and 10: ", (input) => {
        let number = parseInt(input);
        if (1 <= number && number <= 10) {
            console.log("Thanks");
            readline.close();
        } else {
            console.log("Invalid number, try again");
            getNumber();
        }
    });
}

getNumber();
