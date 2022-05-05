

import Navbar from "./components/Navbar";
import Aboutus from "./components/About/About";
// import Register from "./components/register";
import Services from './components/Services/services';
import Landing  from "./components/Landing/landing";



function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
    
     {/* <Register/> */}
        <Landing/>
    
        <Aboutus/>
        <Services />

      <Navbar />

    </div>
  );
}

export default App;
