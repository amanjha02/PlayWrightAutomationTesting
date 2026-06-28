function makeRetryTracker(max) {
    let attempts = 0;
    function tryAgain(testName) {
        attempts++;
        if (attempts > max) {
            return `${testName} exceeded max retries (${max})`;
        }

        return `Attempt ${attempts}/${max} for ${testName}`;
    };

    return tryAgain;

}

let retry = makeRetryTracker(3);
console.log(retry("Login"));
console.log(retry("Login"));
console.log(retry("Login"));
console.log(retry("sainity"));


// Real-world use in automation testing

// Closures like this are useful in tools such as Playwright or Selenium for:

// Retry counters
// API request limits
// Test execution statistics
// Rate limiting
// Session tracking