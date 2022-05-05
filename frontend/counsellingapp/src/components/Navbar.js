import { useState } from "react"
import Sidebar from "./sidebar"


export default function Navbar (){
  const [ showSidebar, setShowSidebar ] = useState(false)
  const links = [
    {
      name: "Home",
      path:"/"
    },
    {
      name: "About Us",
      path: "/aboutus"
    },
    {
      name: "Testimonials",
      path: "/testimonials"
    },
    {
      name: "Services",
      path: "/services"
    },
    {
      name: "Contact Us",
      path: "/contactus"
    }
  ]
  function closeSidebar(){
    setShowSidebar(false)
  }
  return(
   <>
      <div className = "navbar container">
        <div className="logo">
          <img className="logo" src="/images/mental_logo-removebg-preview.png" alt="" />
        </div>
        <div className="navlinks">
          { links.map(link =>(
            <a href="#!" key={link.name}>{link.name}</a>
          ))}
          {/* <a href="#!" >Home</a>
          <a href="#!">About Us</a>
          <a href="#!">Testimonials</a>
          <a href="#!">Services</a>
          <a href="#!">Contact Us</a> */}
        </div>
        <button className="start">Get Started</button>
        <div onClick={() => setShowSidebar(true) } className= { showSidebar ? "sidebar-btn active" : "sidebar-btn" }>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {showSidebar && <Sidebar close= {closeSidebar} links={links}/>}
   </>

  )

}