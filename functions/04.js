function circleStats(radius) {
    const area = Math.PI * radius ** 2;
    const circumference = 2 * Math.PI * radius;
    return [area, circumference];
}

const [a, c] = circleStats(3);

console.log("Area: ", a, "Circumference: ", c);
