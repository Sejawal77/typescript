"use strict";
function make_album(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Make three dictionaries representing different albums
const album1 = make_album("Artist1", "Album Title 1");
const album2 = make_album("Artist2", "Album Title 2", 12);
const album3 = make_album("Artist3", "Album Title 3");
// Print each return value to show that Objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
