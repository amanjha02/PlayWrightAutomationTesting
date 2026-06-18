let testScore = 85;

switch (testScore) {
    case (testScore >= 90):
        console.log("outstanding-Best Performer")
        break;
    case (testScore >= 85):
        console.log("Good");
        break;
    case (testScore >= 80):
        console.log("Average");
        break;
    case (testScore >= 30):
        console.log("Fail");
        break;
    default:
        console.log("Unsatisfactory — Requires training");
}
//You're comparing a number (85) against boolean values (true/false), which will never match.

//output
//Unsatisfactory — Requires training