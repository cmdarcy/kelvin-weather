// assigning variable to kelvin temperature
const kelvin = 0;

// converting kelvin to celsius
let celsius = kelvin - 273;

// converting celsius to fahrenheit, rounding result down to nearest integer
let fahrenheit = Math.floor(celsius * (9 / 5) + 32);

//logging the result temperature of fahrenheit to the console
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//coverting celsius to newton
const newton = Math.floor(celsius * (33 / 100));

//logging the result tempature of newton to the console
console.log(`The temperature is ${newton} degrees Newton.`);
