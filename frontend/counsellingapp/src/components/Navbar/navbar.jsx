import React from 'react'
import brain from '../../assets/images/new.png';
import navbarStyles from './navbar.css'
export default function navbar() {
  return (
    <div>
        <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
       <div className="logo" >
          <img className="logoo" height={120} src={brain} alt="" />
        </div>
        
     
    </a>
  </div>
</nav>

        
    </div>
  )
}
