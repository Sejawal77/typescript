"use strict";
function make_shirt(size = "Large", message = "I love TypeScript") {
    console.log(`Creating a ${size} shirt with the message: "${message}"`);
}
// Create a large shirt with the default message
make_shirt();
// Create a medium shirt with the default message
make_shirt("Medium");
// Create a shirt of any size with a different message
make_shirt("Small", "TypeScript is awesome!");
