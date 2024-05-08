"use strict";
function describe_city(city, country = "Unknown") {
    console.log(`${city} is in ${country}.`);
}
// Call the function for cities in default country
describe_city("Karachi");
describe_city("Lahore");
// Call the function for a city not in default country
describe_city("New York", "USA");
