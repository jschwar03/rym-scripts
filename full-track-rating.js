// ==UserScript==
// @name         Full Track Rating
// @namespace    http://rateyourmusic.com/artist/
// @version      0.1
// @description  Specifies tracks to 2 decimal places so you don't need to hover over them
// @author       jschwar03
// @match        *://*/*
// @grant        none

// ==/UserScript==

/*
* Some extra notes here
*/

(function() {
    console.log("Script running");
    'use strict'; // this means i have to code properly

    // tiptip_content is populated for each track rating
    let tracks = document.querySelectorAll(".page_artist_songs_song")
    // output the number of tracks

    tracks.forEach((track) => {
        let element = track.querySelector(".has_tip.page_artist_songs_song_stats")
        console.log(element.textContent)

        if (element) {
            element.dispatchEvent(new MouseEvent("mouseover", { bubbles: true }));

            setTimeout(() => {
                let test = document.querySelector(".tiptip_content")
                console.log(test)
                let fullRating = document.querySelector(".tiptip_content").textContent.trim().split(' ')[0];
                
                element.textContent = fullRating;
            }, 500)
        }
    });
    console.log(tracks.length);
    let ratings = document.querySelectorAll(".tiptip_content");
    

    // update the rating 
    

    
})();

