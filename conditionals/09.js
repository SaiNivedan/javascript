let year = 2023;

if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(year + " is a leap year");
} else {
    console.log(year + " is NOT a leap year");
}
