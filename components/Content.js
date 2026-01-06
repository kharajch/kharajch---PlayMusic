import "@/components/css/content.css"
import Card from "./components/Card"
import { music } from "./components/Card-data"

const Content = () => {
  const items = [];
  for (let i = 0; i < music.length; i++) {
    items.push(<Card img={music[i].img} singer={music[i].singer} name={music[i].name} key= {i}/>)
  }
  return (
    <div className="content-container">
      <div className="content-header">
        <input type="text" className="searchbar" placeholder={"🔍 Search Songs, Artists"} />
        <img src="/profile-pic/kharaj2.jpg" className="profile-pic" />
      </div>
      <div className="buuble-container">
        <span className="bubble">Romance</span>
        <span className="bubble">Feel good</span>
        <span className="bubble">Relax</span>
        <span className="bubble">Party</span>
        <span className="bubble">Funk</span>
        <span className="bubble">Sad</span>
        <span className="bubble">Energise</span>
        <span className="bubble">Sleep</span>
        <span className="bubble">Work out</span>
        <span className="bubble">Commute</span>
        <span className="bubble">Focus</span>
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