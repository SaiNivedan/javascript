let inputStr = "teeteracdacd";

for (let char of inputStr) {
    console.log(char);
    if (inputStr.split(char).length - 1 === 1) {
        console.log("Char is: ", char);
        break;
    }
}
