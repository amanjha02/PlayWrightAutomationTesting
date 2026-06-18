const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your test score: ', (answer) => {
    const testScore = parseInt(answer);

    if (testScore >= 90) {
        console.log("outstanding-Best Performer");
    } else if (testScore >= 85) {
        console.log("Good");
    } else if (testScore >= 80) {
        console.log("Average");
    } else if (testScore >= 30) {
        console.log("Fail");
    } else {
        console.log("Unsatisfactory — Requires training");
    }

    rl.close();
});