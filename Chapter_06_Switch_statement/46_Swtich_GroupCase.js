let browser = "Edge";

switch (browser) {
    case "Chrome": ///mutiple case condition condtion if one match other will never run
    case "Edge":
    case "Brave":
    case "Opera":
        console.log("Chromium Project!");
        break;
    case "Edge":
        console.log("Mozilla Project!"); //it will not run
        break;
    case "Safari":
        console.log("Apple browser — uses JavaScriptCore engine");
        break;
    default:
        console.log("Unknown browser — manual testing needed");
}