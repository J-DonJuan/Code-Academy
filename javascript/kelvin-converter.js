console.log("Kelvin Converter log!")
// The temperature is 293 Kelvin for this exercise.
const kelvin = 293;

// Converting Kelvin to Celsisu
let celsius = kelvin - 273;

// Convert Celsius to Fahrenheit
let fahrenheit = celsius * (9/5) + 32;

// Rounding down to take the decimal off fahrenheit
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees in Fahrenheit.`);

// Printing out kelvin & celsius values for testing
console.log(`Kelvin: ${kelvin} `);
console.log(`Celsius: ${celsius}`);
console.log(`Fahrenheit: ${fahrenheit}`);



