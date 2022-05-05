import React from 'react'
import logoy from '../../assets/images/logoy.png';

import navbarStyles from './navbar.css'



export default function Navbar (){
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
                      <a class="nav-link active" aria-current="page" href="{}">Home</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="{}">About us</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="{}">Testimonials</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="{}">Services</a>
                  </li>

                  <li class="nav-item">
                      <a class="nav-link" href="{}">Contacts us</a>
                  </li>
              </ul>
          </div>
          <div class="d-flex align-items-center">
            <li class="nav-button">
              <button class="btn btn-lg btn-dark me-2" type="button">Get started</button>
            </li>
          </div>
      </div>
    </nav>

  </>

  )

}