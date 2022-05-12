import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';
function Register()
{      let register_redirect = () => {
    window.location.href = "/auth";
  }
    
    const[username,setUsername]=useState("")
    const[password1,setPassword1]=useState("")
    const[password2,setPassword2]=useState("")
    const[email,setEmail]=useState("")
    const[address,setAddress]=useState("")
    const[area,setArea]=useState("")
    const[age,setAge]=useState("")
    const navigate = useNavigate();

    async function signUp()
    {   let item = {
        username:username,
        password1:password1,
        password2:password2,
        email:email,
        address:address,
        area:area,
        age:age
    }
        console.warn(item)
        let result = await  fetch('https://counselapi.herokuapp.com/registration/patient/',{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        })
        result = await result.json()
        localStorage.setItem('user-info',JSON.stringify(result))
        navigate('/login');

    }
    return(
        <div className="doc">

<div className="col-sm-6 offset-sm-3">
             <div className="d-flex opt">
                <h4>Register as:</h4>
                 <form className="fav">
                      <label>Doctor</label>
                      <input type="radio"onClick={register_redirect} name="fav_language" value="HTML"/><br/>
                     
                </form>
             </div>
             <h3>Patient SignUp</h3>
            <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)} className="form-control" placeholder="username" />
            <br/>
            <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="email" />
            <br/>
            <input type='text' value={age} onChange={(e)=>setAge(e.target.value)} className="form-control" placeholder="Age" />
            <br/>
            <input type='text'value={area} onChange={(e)=>setArea(e.target.value)} className="form-control" placeholder="Area" />
            <br/>
            <input type='text'value={address} onChange={(e)=>setAddress(e.target.value)} className="form-control" placeholder="Address" />
            <br/>
            <input type='password'value={password1} onChange={(e)=>setPassword1(e.target.value)} className="form-control" placeholder="Password" />
            <br/>
            <input type='password'value={password2} onChange={(e)=>setPassword2(e.target.value)} className="form-control" placeholder="Confirm Password" />
            <br/>
            
            <button onClick={signUp} className="btn btn-primary">Sign Up</button>
                   <p>
                        Have an Account?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="/login">Sign In</a>
                        </span>
                    </p>
        </div>
                 
        </div>
        
  )
}
export default Register;