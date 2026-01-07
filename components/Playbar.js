"use client"
import "@/components/css/playbar.css"

const Playbar = () => {

const PauseMusic = () => {

const audios = document.querySelectorAll('audio');
const playingAudio = Array.from(audios).find(audios => !audios.paused && !audios.ended && audios.currentTime > 0);
const pausedAudio = Array.from(audios).find(audios => audios.paused);

playingAudio ? playingAudio.pause() : pausedAudio.play();

}  
const NextMusic = () => {

const audios = document.querySelectorAll('audio');
const playingAudio = Array.from(audios).find(audios => !audios.paused && !audios.ended && audios.currentTime > 0);

if (playingAudio) {
 var musicIndex = playingAudio.getAttribute("index");
 var nextAudio = document.querySelector(`audio[index='${parseInt(musicIndex)+1}']`);

if (nextAudio) {
    playingAudio.pause();
    playingAudio.currentTime = 0;
    nextAudio.play();
}
}
}  
const PreviousMusic = () => {

const audios = document.querySelectorAll('audio');
const playingAudio = Array.from(audios).find(audios => !audios.paused && !audios.ended && audios.currentTime > 0);

if (playingAudio) {
 var musicIndex = playingAudio.getAttribute("index");
 var nextAudio = document.querySelector(`audio[index='${parseInt(musicIndex)-1}']`);

if (nextAudio) {
    playingAudio.pause();
    playingAudio.currentTime = 0;
    nextAudio.play();
}
}
}  
    
  return (
    <div className="playbar">
      <button className="control-btn" onClick={PreviousMusic}><img src="/buttons/step-backward.svg" alt="Previous" /></button>
      <button className="control-btn" onClick={PauseMusic}><img src="/buttons/play.svg" alt="Play" /></button>
      <button className="control-btn" onClick={NextMusic}><img src="/buttons/step-forward.svg" alt="Next" /></button>
    </div>
  )
}

export default Playbar