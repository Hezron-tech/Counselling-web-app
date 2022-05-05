import React from 'react'
import logoy from '../../assets/images/logoy.png';



export default function Navbar (){
  return(
  <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
          <a class="navbar-brand" href="#"></a>
            <img className='img-fluid logo' src={logoy} alt="" width="30" height="24"></img>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                  <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="{}">Home</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="{}">profile</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="{}">add post</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="{}">add neighbourhood</a>
                  </li>

                  <li class="nav-item">
                      <a class="nav-link" href="{}">add business</a>
                  </li>
              </ul>
          </div>

          <div class="d-flex align-items-center">
          </div>
      </div>
    </nav>

  </>

  )

}