"use strict";
function storeCarInfo(manufacturer, model, ...options) {
    const car = {
        manufacturer,
        model,
    };
    options.forEach(option => {
        const [key, value] = option;
        car[key] = value;
    });
    return car;
}
// Call the function with required information and additional properties
const myCar = storeCarInfo("Toyota", "Camry", ["color", "blue"], ["year", 2022]);
// Print the returned object to verify all information was stored correctly
console.log(myCar);
