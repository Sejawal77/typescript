// Conditional Tests: Write a series of conditional tests. Print a statement describing
//  each test and your prediction for the results of each test. 

// Create at least 10 tests. Have at least 5 tests evaluate to True and
//  another 5 tests evaluate to False.

let vls:number = 56;

if(true){
    console.log(vls);
    
}

let other:string = 'love';

let isLove:boolean = true;
if(other =="love" && isLove){
    console.log('this is true , conditions tested');
    
}
else if (other =="hate" ){
    console.log("this is another condition ");
    
}


// True Tests
console.log("True Tests:");

// Test 1: Check if 5 plus 5 equals 10
console.log(5 + 5 === 10);

// Test 2: Check if the string "hello" has a length of 5
console.log("hello".length === 5);

// Test 3: Check if 10 is greater than 5
console.log(10 > 5);

// Test 4: Check if 3 multiplied by 4 equals 12
console.log(3 * 4 === 12);

// Test 5: Check if 20 is even (divisible by 2)
console.log(20 % 2 === 0);

// False Tests
console.log("False Tests:");

// Test 6: Check if 2 multiplied by 3 equals 10 (incorrect)
console.log(2 * 3 === 10);

// Test 7: Check if the string "world" has a length of 3 (incorrect)
console.log("world".length === 3);

// Test 8: Check if 8 is less than 4 (incorrect)
console.log(8 < 4);

// Test 9: Check if 7 is even (incorrect)
console.log(7 % 2 === 0);

