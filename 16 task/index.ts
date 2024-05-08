// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more 
// guests to 
// invite to dinner.

let lastInvited:string [] = ["saif","ali","usama","zain","rehman"];

let newInvite:string [] = ["asif","bilawal","saim"]

let all = lastInvited.concat(newInvite);

// console.log(all)



// Start with your program from Exercise 15. Add a print statement to the end of your program
//  informing people that you 
// found a bigger dinner table.


for(let print of all){

    console.log(`${print}: you found a bigger dinner table.`)
}

// • Add one new guest to the beginning of your array.

   let othernew:string = "wali"

   let newbegin = all.unshift(othernew)

//  Add one new guest to the middle of your array. • Use append() to add one new guest to the end
//   of your list. • Print a new set of invitation
//   messages, one for each person in your list.
let anothernew:string = "ahmed";

//  and we want to add at the index of 4

 let addednew:string[] = newInvite.splice(4,0,anothernew)


for(let lastprint of addednew){

    console.log(`dear respected ${lastprint} you were invited to the table`)
}

