"use client"
import "@/components/css/explorecontent.css"
import Link from "next/link"

const ExploreContent = () => {
  return (
    <>
        <div className="explore-cards-container">

          <div className="explore-card">
            <img src={`/explore/language.png`} alt={"Language"} />
            <br />
            <h3>🎶 Discover music without borders!</h3>
            <p>Dive into languages from across the world and explore the rich diversity of sound through voices. Whether you’re drawn to Latin rhythms, Hindi melodies, French ballads, or Korean pop, this space lets you connect with cultures through their lyrics and emotion. Discover new favorites, celebrate artistry, and let language guide your journey forward.</p>
            <div className="explore-card-btn">
              <Link href={"/Explore/Language"}><button >Explore Languages</button></Link>
            </div>
          </div>

          <div className="explore-card">
            <img src={`/explore/genre.jpg`} alt={"Genre"} />
            <br />
            <h3>🎧 Find your sound, your way!</h3>
            <p>Dive into genres from across the musical spectrum and explore the rich diversity of style through sound. Whether you’re drawn to hip-hop beats, jazz improvisations, rock anthems, or classical symphonies, this space lets you connect with moods through their energy. Discover new favorites, celebrate artistry, and let genre guide your journey.</p>
            <div className="explore-card-btn">
              <Link href ={"/Explore/Genre"}><button>Explore Genres</button></Link>
            </div>
          </div>

          <div className="explore-card">
            <img src={`/explore/artist.png`} alt={"Artist"} />
            <br />
            <h3>🎤 Follow the voices you love!</h3>
            <p>Dive into artists from across the musical world and explore the rich diversity of sound through visionary creators. Whether you’re drawn to iconic legends, rising stars, indie storytellers, or global trendsetters, this space lets you connect with artistry through their unique vision and passion. Discover new favorites, celebrate talent, and let artists guide your journey forward.</p>
            <div className="explore-card-btn">
              <Link href ={"/Explore/Artist"}><button>Explore Artists</button></Link>
            </div>
          </div>

        </div>
    </>
  )
}

export default ExploreContent