"use client"
import "@/components/css/homecontent.css"
import Card from "./components/Card"
import { music } from "./components/music-data"
import { LangFilter} from "./filters/LanguageFilter"
import { GenreFilter} from "./filters/GenreFilter"
import { SingerFilter, SingerFilterArijitSingh, SingerFilterShreyaGhoshal, SingerFilterRajBarman, SingerFilterSalmanMuqtadir } from "./filters/SingerFilter"
import { SingerFilterMohitChauhan, SingerFilterAnkan, SingerFilterAfrin } from "./filters/SingerFilter"
import { useState } from "react"

const ExploreArtist = () => {
  const items = [];
  for (let i = 0; i < music.length; i++) {
    items.push(<Card img={music[i].img} singer={music[i].singer} name={music[i].name} lang={music[i].lang} genre={music[i].genre} index={i} key={i} />)
  }
  const [searchval, setsearchval] = useState("")
  async function SearchFilter(e) {
    setsearchval(e.target.value)
    console.log(e.target.value)
    var searchresults
    if (e.target.value != "") {
      searchresults = document.querySelectorAll(`[name*=${e.target.value}]`);
    }
    else{
      searchresults = document.querySelectorAll(`[name*=""]`);
    }

    const allcards = document.querySelectorAll(".projects_card")

    if (e.target.value != "") {
      await allcards.forEach(el => {
        el.style.display = "none"
      })
      await searchresults.forEach(e => {
        e.style.display = "inline-block"
      })
    }
    else{
      await allcards.forEach(el => {
        el.style.display = "inline-block"
      })
    }

  }

  return (
    <div className="content-container">
      <div className="content-header">
        <input type="text" className="searchbar" placeholder={"🔍 Search Songs"} value={searchval} onChange={SearchFilter} />
      </div>
      <div className="buuble-container">
        <button className="bubble" onClick={()=>{LangFilter(); GenreFilter(); SingerFilter()}}>All</button>
        <button className="bubble" onClick={SingerFilterArijitSingh}>Arijit Singh</button>
        <button className="bubble" onClick={SingerFilterShreyaGhoshal}>Shreya Ghoshal</button>
        <button className="bubble" onClick={SingerFilterMohitChauhan}>Mohit Chauhan</button>
        <button className="bubble" onClick={SingerFilterRajBarman}>Raj Barman</button>
        <button className="bubble" onClick={SingerFilterSalmanMuqtadir}>Salman Muqtadir</button>
        <button className="bubble" onClick={SingerFilterAnkan}>Ankan</button>
        <button className="bubble"onClick={SingerFilterAfrin}>Afrin</button>
      </div>

      <div className="cards-container-parent">
        <div className="cards-container">
          {items}
        </div>
      </div>
    </div>
  )
}

export default ExploreArtist