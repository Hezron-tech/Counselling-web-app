import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/appointment.css';
function Appointment() {
  const[first_name,setfirst_name]=useState("")
  const[last_name,setlast_name]=useState("")
  const[email,setemail]=useState("")
  const[phone,setphone]=useState("")
  const[request,setrequest]=useState("")
  
  const navigate = useNavigate();

  async function appointment()
  {   let item = {
      first_name:first_name,
      last_name:last_name,
      email:email,
      phone:phone,
      request:request,
  }
      console.warn(item)
      let result = await  fetch('https://agile-wildwood-05543.herokuapp.com/api/make-an-appointment/',{
          method:'POST',
          body:JSON.stringify(item),
          headers:{
              'Content-Type':'application/json',
              'Accept':'application/json'
          }
      })
      result = await result.json()
      localStorage.setItem('user-info',JSON.stringify(result))
      navigate('/appointment');

  }
  return (                       
<div class="col-sm-5  smm ">
  <h2>Book Appointment</h2>
      <div className='form-group'>
          <form name='sendNewMessage'>
              <div className='row'>
                  <div className='col-6'>
                      <input 
                          value={first_name}
                          onChange={(e)=>setfirst_name(e.target.value)}
                          type='text' 
                          id= 'first name' 
                          className='form-control' 
                          placeholder='First Name' 
                          name='first name' 
                          required
                      // onChange={handleChange}
                      ></input>
                  </div>
                  <div className='col-6'>
                      <input
                          value={last_name}
                          onChange={(e)=>setlast_name(e.target.value)} 
                          type='text' 
                          id= 'last name' 
                          className='form-control' 
                          placeholder='Last Name' 
                          name='last name' 
                          required
                      // onChange={handleChange}
                      ></input>
                  </div>
                  <div className='col-6'>
                      <input
                          value={email}
                          onChange={(e)=>setemail(e.target.value)} 
                          type='email' 
                          id= 'email' 
                          className='form-control' 
                          placeholder='Email' 
                          name='email' 
                          required
                      // onChange={handleChange}
                      ></input>
                  </div>
                  <div className='col-6'>
                      <input 
                          value={phone}
                          onChange={(e)=>setphone(e.target.value)}
                          type='phone' 
                          id= 'phone' 
                          className='form-control' 
                          placeholder='Phone' 
                          name='phone' 
                          required
                      // onChange={handleChange}
                      ></input>
                  </div>
              </div>
              <div className='feedback'>
                  <div className='form-group'>
                      <textarea
                          value={request}
                          onChange={(e)=>setrequest(e.target.value)} 
                          type='text' 
                          id= 'request' 
                          className='form-control' 
                          placeholder='Request' 
                          name='request' 
                          rows='4' 
                      // onChange={handleChange}
                      ></textarea>
                  </div>
              </div> <br/>
              <button onClick={appointment} type="submit" class="btn btn-primary  btn-sm">Book Appointment</button>
          </form>
      </div>
  </div>
  )
}

export default Appointment