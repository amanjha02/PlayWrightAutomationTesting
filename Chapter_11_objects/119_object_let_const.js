let config1 = { browser: "Chrome", timeout: 3000 };
// ✅ Modifying properties — ALLOWED
config1.browser = "Firefox";
config1.timeout = 5000;
config1.retries = 2;
console.log(config1);

config1 = { browser: "Safari" };
console.log(config1);

// print
console.log("---- ")

const config = { browser: "Chrome", timeout: 3000 };
// ✅ Modifying properties — ALLOWED
config.browser = "Firefox";
config.timeout = 5000;
config.retries = 2;
console.log(config);

// config = { browser: "Safari" };
console.log(config);

//const prevents reassignment of the variable but does not make the
// object immutable. Object properties can still be modified.
// let allows both property modification and reassignment of the variable to a different object.

/* Because of this, developers usually prefer
 const for objects unless they know the variable itself needs to point to a different object later. */