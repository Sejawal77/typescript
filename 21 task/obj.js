"use strict";
// They think of something you could store in a TypeScript Object. 
// Write a program that 
// creates Objects containing these items.
// previous Array 
// const countries: string[] = [
//     "United States",
//     "Canada",
//     "United Kingdom",
//     "France",
//     "Germany",
//     "Japan",
//     "Australia",
//     "Brazil",
//     "India",
//     "China"
// ];
let obj = {
    first: "United state",
    second: " china ",
    third: "japan",
    fourth: "Australia",
    fifth: "India",
    sixth: "Brazil"
};
for (let names in obj) {
    console.log(obj[names]);
}
