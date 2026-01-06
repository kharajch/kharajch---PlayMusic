import Link from "next/link"
import "@/components/css/sidenav.css"

const Sidenav = () => {
  return (
    <div className="main">
      <div className='side-nav-contaier'>
        <div className="nav-link-container">
          <ul className="nav-ul">
            <Link className={"nav-link"} href={"/"}><button className="nav-link-btn">Home</button></Link>
            <Link className={"nav-link"} href={"/Explore"}><button className="nav-link-btn">Explore</button></Link>
            <Link className={"nav-link"} href={"/Library"}><button className="nav-link-btn">Library</button></Link>
          </ul>
        </div>
        <button className="nav-btn">+ New Playlist</button>
    </div>
    </div>
  )
}

export default Sidenav