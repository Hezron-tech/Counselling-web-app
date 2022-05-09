
import React from "react";
import {BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
  
import Navbar from "./components/Navbar/Navbar";
import About from './components/About/About';
import Login from './components/login';
// import Login from '.src/Login';
import Register from "./components/register";
import Services from './components/Services/services';
import Landing  from "./components/Landing/landing";
import ErrorPage from "./components/ErrorPage";
import Testimonials from './components/Testimonials/testimonials';
import Contactus from "./components/contactus/contactus";
import Home from './components/home'
import Auth from './components/auth';


function App() {
  return (
        <>
        <Router>
          
             <Navbar/>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="register" element={<Register />} />
              <Route path="auth" element={<Auth />} />
              <Route path="login" element={<Login />} />
              <Route path="home" element={<Home />} />
              <Route path="contactus" element={< Contactus />} />
              <Route path="testimonials" element={<Testimonials />} />
              <Route path="*" element={<ErrorPage/>} />
            </Routes>

        </Router>
     
        
    
        </>
  
  );

}

export default App;

