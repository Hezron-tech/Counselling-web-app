import React from 'react'
import {Nav,NavDropdown} from 'react-bootstrap'
import logoy from '../../assets/images/logoy.png';
import {NavLink} from 'react-router-dom';
import navbarStyles from './navbar.css'
import useAuth from '../../hooks/useAuth'
  
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthProvider";



export default function Navbar (){
 
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const { auth } = useAuth();
  const logout = async () => {
     
      setAuth({});
      navigate('/login');
  }
  return(
  <>

    <nav class="navbar navbar-expand-lg navbar-light ">
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
          { auth?.user?
          <div className="d-flex align-items-center">
            <li className="nav-button">
              <button className="btn btn-dark me-2" onClick={logout} type="button">Logout</button>
            </li>
          </div>
          :
         
          <div  class="d-flex align-items-center">
          <li height={1} class="nav-button">
            <button   class="btn  btn-dark me-2" onClick={() => navigate('/login')} type="button">Get started</button>
          </li>
        </div>
        }
      </div>
        
      </nav>
  </>
  )
}

 