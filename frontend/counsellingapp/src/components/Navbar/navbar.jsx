import React from 'react'
import brain from '../../assets/images/new.png';
import navbarStyles from './navbar.css'
export default function navbar() {
  return (
    <div>
        <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img className='logoo' src={brain} alt="" class="d-inline-block align-text-top"/>
      Bootstrap
    </a>
  </div>
</nav>

        
    </div>
  )
}
