// Tests for equality and inequality with strings
console.log("Equality and Inequality Tests with Strings:");
console.log("apple" === "apple"); // True


// Tests using the toLowerCase function
console.log("\nTests using the toLowerCase function:");
console.log("HELLO".toLowerCase() === "hello"); // True
console.log("WORLD".toLowerCase() === "world"); // True

// Numerical tests
console.log("\nNumerical Tests:");
console.log(10 === 10); // Equality (True)
console.log(5 > 3); // Greater than (True)
console.log(5 < 3); // Less than (False)
console.log(5 >= 5); // Greater than or equal to (True)
console.log(3 <= 2); // Less than or equal to (False)

// Tests using "and" and "or" operators
console.log("\nTests using 'and' and 'or' operators:");
console.log((5 > 3) && (10 === 10)); // True (Both conditions are true)
console.log((5 > 3) || (5 < 3)); // True (At least one condition is true)

// Test whether an item is in an array
console.log("\nTest whether an item is in an array:");
const fruits: string[] = ["apple", "banana", "orange"];
console.log(fruits.includes("banana")); // True
console.log(fruits.includes("grape")); // False

// Test whether an item is not in an array
console.log("\nTest whether an item is not in an array:");
console.log(!fruits.includes("grape")); // True
console.log(!fruits.includes("apple")); // False
