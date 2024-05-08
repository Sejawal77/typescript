// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that 
// includes at least three people you’d like to invite to dinner. Then use your list to print a message to each
//  person, inviting them to dinner.




// Define an array of guests
let guestList: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];

// Iterate through the array and print invitation messages
guestList.forEach((guest) => {
    console.log(`Dear ${guest},\n\nI would like to cordially invite you to dinner. It would be an honor to have your presence.\n\nSincerely,\n[Sejawal khan]`);
});
