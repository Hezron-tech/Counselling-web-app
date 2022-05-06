import React from 'react'
import logoy from '../../assets/images/logoy.png';
import {NavLink} from 'react-router-dom';
import navbarStyles from './navbar.css'



export default function Navbar (){
  let register_redirect = () => {
    window.location.href = "/register";
  }
  return(
  <>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
            <img className='img-fluid logo' src={logoy} alt="" width="100" height="80" padding-left='0%'></img>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="menu" id="navbarNav">
              <ul class="navbar-nav">
                  <li class="nav-item">
                      <NavLink class="nav-link active" aria-current="page" to="/">Home</NavLink>
                  </li>
                  <li class="nav-item">
                      <NavLink class="nav-link" to="/about">About</NavLink>
                  </li>
                  <li class="nav-item">
                      <NavLink class="nav-link" to="/testimonials">Testimonials</NavLink>
                  </li>
                  <li class="nav-item">
                      <NavLink class="nav-link" to="/services">Services</NavLink>
                  </li>

                  <li class="nav-item">
                      <NavLink class="nav-link" to="/contactus">Contacts</NavLink>
                  </li>
              </ul>
          </div>
          <div  class="d-flex align-items-center">
            <li height={1} class="nav-button">
              <button   class="btn  btn-dark me-2" onClick={register_redirect} type="button">Get started</button>
            </li>
          </div>
      </div>
    </nav>

  </>

  )

}