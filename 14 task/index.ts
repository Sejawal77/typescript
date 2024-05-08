
// Define the original guest list
let originalGuestList: string[] = ["saif", "ali khan", "sultan","irfan","ahmed"];

// Find out the guest who can't make it
let unableToAttend: string = "irfan";

// Define a new guest to invite
let newGuest: string = "rashid";

// Remove the guest who can't make it
let updatedGuestList: string[] = originalGuestList.filter((guest) => guest !== unableToAttend);

// Add the new guest
updatedGuestList.push(newGuest);

// Send out invitations to the updated guest list
updatedGuestList.forEach((guest) => {
    console.log(`Dear ${guest},\n\nI regret to inform you that due to unforeseen circumstances, one of our guests cannot make it to the dinner. Therefore, we would be delighted if you could join us instead.\n\nPlease let us know at your earliest convenience if you can attend.\n\nSincerely,\n[Sejawal khan]`);
});


console.log(`${unableToAttend} can not make this `);