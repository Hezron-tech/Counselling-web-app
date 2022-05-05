
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    
} from "react-router-dom";

import { render } from 'react-dom/cjs/react-dom.production.min';
import Navbar from "./components/Navbar";
import Register from "./components/register";
import About from './components/About/About';
import landing from './components/Landing/landing';
import services from './components/Services/services'
import Sidebar from './components/sidebar';





function App() {
  return (
    <div>
      <Router>
        <Navbar />
          <Switch>
            <Route path ={'/landing'} component= {landing}></Route> 
            <Route path ={'/about'} component= {About}></Route> 
            <Route path ={'/'} component= {services}></Route> 
            <Route path ={'/'} component= {Sidebar}></Route>
            <Route path={'/login'} component={Login}></Route>
          </Switch>
      </Router>
      
    </div>
  );

}

