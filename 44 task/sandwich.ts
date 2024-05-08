



function makeSandwich(items: string[]): void {
    console.log("Sandwich Summary:");
    console.log("Bread");
    items.forEach(item => {
        console.log(item);
    });
    console.log("Bread\n");
}

// Call the function three times with different number of arguments
makeSandwich(["Cheese", "Tomato", "Lettuce"]);
makeSandwich(["Ham", "Mustard"]);
makeSandwich(["Peanut Butter", "Jelly", "Banana"]);
