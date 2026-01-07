"use client"
import "@/components/css/homecontent.css"
import Card from "./components/Card"
import { music } from "./components/music-data"
import { LangFilter, LangFilterBeng, LangFilterEng, LangFilterHind } from "./filters/LanguageFilter"
import { GenreFilter, GenreFilterRomantic, GenreFilterEnergetic, GenreFilterSad } from "./filters/GenreFilter"
import { useState } from "react"

const Content = () => {
  const items = [];
  for (let i = 0; i < music.length; i++) {
    items.push(<Card img={music[i].img} singer={music[i].singer} name={music[i].name} lang={music[i].lang} genre={music[i].genre} key={i} />)
  }
  const [searchval, setsearchval] = useState("")
  async function SearchFilter(e) {
    setsearchval(e.target.value)
    console.log(e.target.value)
    var searchresults
    if (e.target.value != "") {
      searchresults = document.querySelectorAll(`[nme*=${e.target.value}]`);
    }
    else{
      searchresults = document.querySelectorAll(`[nme*=""]`);
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
        <input type="text" className="searchbar" placeholder={"🔍 Search Songs, Artists"} value={searchval} onChange={SearchFilter} />
        <img src="/profile-pic/kharaj2.jpg" className="profile-pic" />
      </div>
      <div className="buuble-container">
        <button className="bubble" onClick={()=>{LangFilter(); GenreFilter()}}>All</button>
      </div>

      <div className="cards-container-parent">
        <div className="cards-container">
          {items}
        </div>
      </div>
    </div>
  )
}

export default Content