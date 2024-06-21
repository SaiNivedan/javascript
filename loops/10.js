const waitTime = 1000; // 1 second in milliseconds
const maxRetries = 5;
let attempts = 0;

function simulateRetry(attempts) {
    setTimeout(() => {
        console.log(`Attempt ${attempts + 1} - wait time ${waitTime / 1000} seconds`);
        waitTime *= 2;
        attempts++;
        if (attempts < maxRetries) {
            simulateRetry(attempts);
        }
    }, waitTime);
}

simulateRetry(attempts);
