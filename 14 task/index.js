// Define the original guest list
var originalGuestList = ["saif", "ali khan", "sultan", "irfan", "ahmed"];
// Find out the guest who can't make it
var unableToAttend = "irfan";
// Define a new guest to invite
var newGuest = "rashid";
// Remove the guest who can't make it
var updatedGuestList = originalGuestList.filter(function (guest) { return guest !== unableToAttend; });
// Add the new guest
updatedGuestList.push(newGuest);
// Send out invitations to the updated guest list
updatedGuestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\n\nI regret to inform you that due to unforeseen circumstances, one of our guests cannot make it to the dinner. Therefore, we would be delighted if you could join us instead.\n\nPlease let us know at your earliest convenience if you can attend.\n\nSincerely,\n[Sejawal khan]"));
});
console.log("".concat(unableToAttend, " can not make this "));
