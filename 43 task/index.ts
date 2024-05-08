



function show_magicians(magicians: string[]): void {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

// Array of magician's names
let originalMagicians: string[] = ["Merlin", "Harry Houdini", "David Copperfield"];

// Create a copy of the original array
const copiedMagicians: string[] = [...originalMagicians];

// Modify the copied array of magicians by adding "the Great" to each magician's name
const greatMagicians: string[] = make_great(copiedMagicians);

// Call show_magicians with each array to show the original names and the names with "the Great" added
console.log("Original Magicians:");
show_magicians(originalMagicians);

console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
