function multiply(p1, p2) {
    // Check if both parameters are numbers
    if (typeof p1 === 'number' && typeof p2 === 'number') {
        return p1 * p2;
    }
    // Check if either parameter is a string and convert to number if possible
    else if (typeof p1 === 'string') {
        p1 = parseFloat(p1);
    } else if (typeof p2 === 'string') {
        p2 = parseFloat(p2);
    }
    
    // If both parameters are now numbers (or convertible), return the product
    if (typeof p1 === 'number' && typeof p2 === 'number') {
        return p1 * p2;
    }
    
    // If not able to multiply, return NaN (Not a Number)
    return NaN;
}

console.log(multiply(8, 5));   // Output: 40
console.log(multiply('a', 5)); // Output: NaN
console.log(multiply(5, 'a')); // Output: NaN
