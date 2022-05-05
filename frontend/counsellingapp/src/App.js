
import React from "react";


import Navbar from "./components/Navbar/Navbar";
import About from './components/About/About';
import landing from './components/Landing/landing';
import services from './components/Services/services'
import Sidebar from './components/sidebar';

import Aboutus from "./components/About/About";
import Register from "./components/register";
import Services from './components/Services/services';
import Landing  from "./components/Landing/landing";



function App() {
  return (

    <div className="App">
      {/* <Navbar /> */}

    
     {/* <Register/>  */}
     
    
       {/* <Aboutus/> */}
         {/* <Services /> */}



    
      <Navbar></Navbar>
        <Landing/>
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
