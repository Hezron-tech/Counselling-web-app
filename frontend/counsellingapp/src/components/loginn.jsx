import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
function Loginn() {
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem('user-info')){
      // navigate('/home');
    }
  },[])
  async function login(){
     console.warn(username,email,password)
     let item = {
        username,
        email,
        password,
     }
     let result= await fetch('https://counselapi.herokuapp.com/rest-auth/login/',{
        method:'POST',
        body:JSON.stringify(item),
        headers:{
            'Content-Type':'application/json',
            'Accept':'application/json'
        }
     });
     result = await result.json();
     localStorage.setItem('user-info',JSON.stringify(result))
     navigate('/home');
  }
  return (
    <div >login
          <div className='col-sm-6 offset-sm-3'>
          <input type='text' 
           onChange={(e) => setUsername(e.target.value)}
            placeholder='username' 
            className='form-ontrol'/>
            <br/>
          <input type='email' 
           onChange={(e) => setEmail(e.target.value)}
            placeholder='email' 
            className='form-ontrol'/>
            <br/>
            <input type='password'
             onChange={(e) => setPassword(e.target.value)}
             placeholder='password'
              className='form-ontrol'/>
            <br/>
             <button onClick={login} className='btn btn-primary'>Login</button>
          </div>
    
    </div>
   
  )
}

export default Loginn