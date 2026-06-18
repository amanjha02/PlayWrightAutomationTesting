// You are working API Validation
// response Code - 200, 404, 401, 403.....404
let responsCode = 404;

switch (responsCode) {
    case 200:
        console.log("200 OK");
        break;
    case 404:
        console.log("404 not found")
        break;
    default:
        console.log("Not status code match");
}