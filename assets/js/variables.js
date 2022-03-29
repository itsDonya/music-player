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
const progressContainer = document.querySelector(".progress-container");
const progress = document.querySelector(".progress");
const toggleSwitch = document.querySelector('input[type="checkbox"]');
// ------
export { playBtn, likeBtn, music, nextBtn, prevBtn, songName, artistName, cover, currentTimeEl, durationEl, progressContainer, progress, toggleSwitch };