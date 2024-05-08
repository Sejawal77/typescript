"use strict";
let current_users = ['Admin', 'Saif ali', 'Asif ali', 'Ahmed', 'Zain'];
let new_users = ['Wali', 'Admin', 'Asif ali', 'Shaam', 'Mumtaz'];
let current_users_lower = current_users.map(users => users.toLowerCase());
for (let users of new_users) {
    if (current_users_lower.includes(users.toLowerCase())) {
        console.log(`sorry ${users} is already exists`);
    }
    else {
        console.log(`${users} is added`);
    }
}
