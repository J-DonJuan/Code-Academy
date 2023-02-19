// Setting my current age
const myAge = 24;

let earlyYears = 2;
earlyYears = earlyYears * 10.5;
console.log(`Early years should be 21: ${earlyYears}`);

// Taking 2 years off since earlyYears took care of them
let laterYears = myAge - 2;
console.log(`Testing later years value: ${laterYears}`);

// Taking remaining years left & multiplying by 4 for the right dog year calculation
laterYears *= 4;
console.log(`Testing laterYears after converting to doggo years: ${laterYears}`);

// Getting total age in dog years
let myAgeInDogYears = earlyYears + laterYears;

myName = "John".toLowerCase();
console.log(`Should be my name in all lowercase: ${myName}`)

console.log(`My name is ${myName} I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
