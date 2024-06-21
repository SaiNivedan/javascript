function* evenGenerator(limit) {
    for (let i = 2; i <= limit; i += 2) {
        yield i;
    }
}

// Using the generator to iterate over even numbers up to 10
for (let num of evenGenerator(10)) {
    console.log(num);
}
