
import React from "react";

import {BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
  
import Navbar from "./components/Navbar/Navbar";
import About from './components/About/About';
import Login from './components/login';
import Layout from './components/Layout';
import Loginn from './components/loginn';
import Register from "./components/register";
import Services from './components/Services/services';
import Landing  from "./components/Landing/landing";
import ErrorPage from "./components/ErrorPage";
import Testimonials from './components/Testimonials/testimonials';
import Contactus from "./components/contactus/contactus";
import Home from './components/home';
import Medication from './components/medication';
import Auth from './components/auth';
import RequireAuth  from "./components/RequireAuth";
import Footer from "./components/footer";
import Appointment from "./components/appointment";

function App() {
  return (
        <>
        <Router>
          
             <Navbar/>
            <Routes>
            <Route path="/" element={<Layout />}>

              <Route element={<RequireAuth/>}>  
                   <Route path="services" element={<Services />} />
                   <Route path="home" element={<Home />} />
                   <Route path="medication" element={<Medication />} />
                   <Route path="about" element={<About />} />
                   <Route path="contactus" element={< Contactus />} />
                   <Route path="testimonials" element={<Testimonials />} />
                 
             
               </Route>
                    <Route path="/" element={<Landing />} />
                    <Route path="register" element={<Register />} />
                    <Route path="auth" element={<Auth />} />
                    <Route path="login" element={<Login />} />        
                    <Route path="*" element={<ErrorPage/>} />
                    <Route path="appointment" element={<Appointment/>} />
              
            </Route>
             
         
          
            </Routes>
          
        </Router>
     
        
    
        </>
  
  );

}

export default App;

