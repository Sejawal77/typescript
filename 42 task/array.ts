



function show_magicians(magicians: string[]): void {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

// Array of magician's names
let magicians: string[] = ["Merlin", "Harry Houdini", "David Copperfield"];

// Modify the array of magicians by adding "the Great" to each magician's name
magicians = make_great(magicians);

// Call show_magicians to see that the list has actually been modified
show_magicians(magicians);
