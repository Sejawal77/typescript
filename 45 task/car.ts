





interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow arbitrary properties
}

function storeCarInfo(manufacturer: string, model: string, ...options: any[]): Car {
    const car: Car = {
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
