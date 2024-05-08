
// Intentional Error: If you haven’t received an array index error in one of 
// your programs yet, try to make one happen. Change an index in one of your 
// programs to produce an index error. Make sure you correct the error before closing the program.



// Intentional error: missing semicolon
let arr: number[] = [1, 2, 3]
for (let i = 0; i < arr.length; i++)
    console.log("Element at index " + i + " is: " + arr[i])


// now fix the problem
// Fixed code with semicolon
let arr2: number[] = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
    console.log("Element at index " + i + " is: " + arr[i]);
}
