import MediaPlayer from "./MediaPlayer";

const video = document.querySelector("video");
const button = document.querySelector("button");

player = new MediaPlayer({ el: video });
button.onclick = () => player.togglePlay();
