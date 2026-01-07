import Link from "next/link"
import "@/components/css/sidenav.css"

const Sidenav = () => {
  return (
    <div className="main">
      <div className='side-nav-contaier'>
        <div className="header">
          <a href="https://github.com/kharajch"> <img src="/profile-pic/kharaj.jpg" className="profile-pic" /></a>
          <h2 className="username"><a href="https://github.com/kharajch">kharajch</a></h2>
        </div>
        <div className="nav-link-container">
          <ul className="nav-ul">
            <Link className={"nav-link"} href={"/"}><button className="nav-link-btn">Home</button></Link>
            <Link className={"nav-link"} href={"/Explore"}><button className="nav-link-btn">Explore</button></Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidenav