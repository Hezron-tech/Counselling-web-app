
import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import About from './components/About/About';
import landing from './components/Landing/landing';
import Services from './components/Services/services';
import Sidebar from './components/sidebar';
import Register from './components/register';





function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Services></Services>
      <Register></Register>
      
      {/* <Router>
        <Navbar />
          <Switch>
            <Route path ={'/landing'} component= {landing}></Route> 
            <Route path ={'/about'} component= {About}></Route> 
            <Route path ={'/'} component= {services}></Route> 
            <Route path ={'/'} component= {Sidebar}></Route>
          </Switch>
      </Router> */}
      
    </div>
  );

}

export default App;

