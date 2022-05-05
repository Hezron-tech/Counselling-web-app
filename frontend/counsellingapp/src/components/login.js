import React, { useState,useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';
import Loginn from  './login'

function Login(){


    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    // const history = useNavigate();
    // useEffect(() =>{
    //     if (localStorage.getItem('user-info')){
    //         history.push("/home")
    //     }
    // },
    // [])

    async function Login(){
        console.warn(email,password);
        let item= {email,password};
        let result=await fetch('http://127.0.0.1:8000/rest-auth/login/', {
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem( "user-info",JSON.stringify(result))
        // history.push("/home")
    }
    return(
        <div>
            <Loginn/>
        <h1>Login Here</h1>
        <div className='col-sm-6 offset-sm-3'>
            <input type="text" placeholder='email' onChange={(e)=>setEmail(e.target.value)} className='form-control'/> <br/>
            <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)} className='form-control'/> <br/>

            <button onClick={Login} className='btn btn-primary'>Login </button>

        </div>

        </div>
        

    )
}
export default Login;