let number = 3;

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(number + ' x ' + i + ' = ' + (number * i));
}
