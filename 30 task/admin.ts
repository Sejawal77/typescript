
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you 
// are writing code that will print a greeting to each user after they log in to a website. Loop
//  through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like
//  to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again




let arr:string[] = ["Admin","sajawal","saif ali","muhammad danish","hasnain ali","meer usama"];

for(let i = 0 ; i<arr.length;i++){

    if(arr[i]=='Admin'){
        console.log(`hello ${arr[i] } would you like to see status report`);
        
    }
    else {
        console.log(`hello ${arr[i]} wellcome`);
        
    }
}