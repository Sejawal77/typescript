"use strict";
let arr = ["Admin", "sajawal", "saif ali", "muhammad danish", "hasnain ali", "meer usama"];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 'Admin') {
        console.log(`hello ${arr[i]} would you like to see status report`);
    }
    else {
        console.log(`hello ${arr[i]} wellcome`);
    }
}
