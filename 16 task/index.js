// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more 
// guests to 
// invite to dinner.
var lastInvited = ["saif", "ali", "usama", "zain", "rehman"];
var newInvite = ["asif", "bilawal", "saim"];
var all = lastInvited.concat(newInvite);
// console.log(all)
// Start with your program from Exercise 15. Add a print statement to the end of your program
//  informing people that you 
// found a bigger dinner table.
for (var _i = 0, all_1 = all; _i < all_1.length; _i++) {
    var print_1 = all_1[_i];
    console.log("".concat(print_1, ": you found a bigger dinner table."));
}
// • Add one new guest to the beginning of your array.
var othernew = "wali";
var newbegin = all.unshift(othernew);
//  Add one new guest to the middle of your array. • Use append() to add one new guest to the end
//   of your list. • Print a new set of invitation
//   messages, one for each person in your list.
var anothernew = "ahmed";
//  and we want to add at the index of 4
var addednew = newInvite.splice(4, 0, anothernew);
for (var _a = 0, addednew_1 = addednew; _a < addednew_1.length; _a++) {
    var lastprint = addednew_1[_a];
    console.log("dear respected ".concat(lastprint, " you were invited to the table"));
}
