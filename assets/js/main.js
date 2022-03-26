const playBtn = document.querySelector("#play");
const likeBtn = document.querySelector("#like");
const music = document.querySelector("audio");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const songName = document.querySelector(".song-name");
const artistName = document.querySelector(".artist-name");
const cover = document.querySelector(".song-cover");
const currentTimeEl = document.querySelector(".current-time");
const durationEl = document.querySelector(".duration");
const progress = document.querySelector(".progress");
// ------------Play & Pause-------------

// Check if playing
let isPlaying = false;

// Play
function playSong() {
    isPlaying = true;
    music.play();
    playBtn.classList.replace("fa-play", "fa-pause");
}

// Pause
function pauseSong() {
    isPlaying = false;
    music.pause();
    playBtn.classList.replace("fa-pause", "fa-play");
}

// Play/Pause Event Listener
playBtn.addEventListener("click", () => isPlaying ? pauseSong() : playSong());


// ------------Like Song-------------

// Check if liked
let liked = false;

function likeSong() {
    liked = true;
    likeBtn.style.color = "#da6c6c";
}

function disslikeSong() {
    liked = false;
    likeBtn.style.color = "#c0c2d5";
}

likeBtn.addEventListener("click", () => liked ? disslikeSong() : likeSong())

// -------------Songs-------------

const songs = [
    {
        name: "Boy Bye",
        artist: "Helly Luv"
    },
    {
        name: "Build a Bitch",
        artist: "Bella Poarch"
    },
    {
        name: "Call Me by Your Name",
        artist: "Lil Nas X"
    },
    {
        name: "Guns & Roses",
        artist: "Helly Luv, Ardian Bujupi"
    },
    {
        name: "Happier Than Ever",
        artist: "Billie Eilish"
    },
    {
        name: "I Wanna Be Your Slave",
        artist: "Maneskin"
    },
    {
        name: "Money",
        artist: "LISA"
    },
    {
        name: "Moonlight",
        artist: "XXXTentacion"
    },
    {
        name: "Nice Guy",
        artist: "Eminen (Ft Jessie Reyez)"
    },
    {
        name: "The Redemy for a Broken Heart",
        artist: "XXXTentacion"
    },
    {
        name: "Therefore I Am",
        artist: "Billie Eilish"
    }
]

// -----Update Songs-----

let songIndex = 0;

//next
nextBtn.addEventListener("click", nextSong);
function nextSong(index) {
    if (songIndex === 10) {
        songIndex = 0;
    } else {
        songIndex ++;
    }
    music.src = `assets/music/${songs[songIndex].name}.mp3`;
    songName.innerText = `${songs[songIndex].name}`;
    artistName.innerText = `${songs[songIndex].artist}`;
    cover.src = `assets/img/${songs[songIndex].name}.jpg`;
    uploadSong();
    playSong();
}

//previous
prevBtn.addEventListener("click", prevSong);
function prevSong(index) {
    if (songIndex === 0) {
        songIndex = 10;
    } else {
        songIndex --;
    }
    uploadSong();
    playSong();
}


// Upload function
function uploadSong() {
    music.src = `assets/music/${songs[songIndex].name}.mp3`;
    songName.innerText = `${songs[songIndex].name}`;
    artistName.innerText = `${songs[songIndex].artist}`;
    cover.src = `assets/img/${songs[songIndex].name}.jpg`;
}

// ----------Song Progress----------
music.addEventListener('timeupdate', (e) => {
    const {currentTime, duration} = e.target;

    // duration
    const durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);
    if (durationSeconds<10) {
        durationSeconds = `0${Math.floor(duration % 60)}`;
    }
    if (durationSeconds) {
        durationEl.innerText = `${durationMinutes}:${durationSeconds}`;
    }
    
    // current time
    const currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds<10) {
        currentSeconds = `0${Math.floor(currentTime % 60)}`
    }
    currentTimeEl.innerText = `${currentMinutes}:${currentSeconds}`;

    // progress width
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

})

