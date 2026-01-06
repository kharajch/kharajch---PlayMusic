
"use client"

import { useState, useEffect } from "react"
const Card = (props) => {
  const [Play, setPlay] = useState(false)


  const PlayMusic = () => {
    const allaudios = document.querySelectorAll("audio");

    allaudios.forEach(allaudios => {
      allaudios.muted = true;
    });
    setPlay(!Play);
  }

  return (
    <div className="projects_card">
      <img src={`/music/img/${props.img}`} alt={props.name} />
      <br />
      <h3>{props.singer}</h3>
      <p>{props.name}</p>
      <div className="card_btn">
        <button onClick={PlayMusic}><img src="/buttons/play.svg" alt="Play" /></button>
      </div>
      {Play && <audio autoPlay={true} src={`/music/audio/${props.name}.mp3`}></audio>}
    </div>
  )
}

export default Card