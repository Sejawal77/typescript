// Greetings: Start with the array you used in Exercise 11, but instead of just printing each 
// person’s name, print a message to them. The text of each message should be the same, but each message should 
// be personalized with the person’s name
var friend = ["ali", "ahmed", "saif", "usama", "mehmood"];
for (var i = 0; i < friend.length; i++) {
    console.log("how are you, ".concat(friend[i], " what are you doing "));
}
