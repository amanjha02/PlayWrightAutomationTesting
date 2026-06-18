let day = 0;
switch (day) { //Use switch when you have many possible exact values to check.
    case 0:
        console.log("Monday")
        let a = 10;
        let b = 20;
        console.log(a + b)
        break;
    case 1:
        console.log("Tuesday") //Without break, JavaScript continues executing the next cases (fall-through behavior).
        break;
    case 2:
        console.log("Wednesday") //switch compares values using strict equality (===).
        break;
    case 3:
        console.log("Thrusday")
        break;
    case 4:
        console.log("friday")
        break;
    case 5:
        console.log("sataurday")
        break;
    case 6:
        console.log("sunday")
        break;
    default:
        console.log("Noday")
}