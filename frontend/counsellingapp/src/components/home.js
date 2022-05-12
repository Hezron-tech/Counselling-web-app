import React,{useEffect,useState} from 'react'
import '../styles/home.css';

const Home = () => {
    const [users,setUser]=useState([])
    useEffect(() =>{
        fetch("https://counselapi.herokuapp.com/api/counselor/").then((result)=>{
            result.json().then((resp)=>{
                console.warn(resp)
                setUser(resp)
            })
        })


             
    },[])
    console.warn(users)
    return (
       <div className='tabs'>
            <table class="table   table-hover">
                    <tr >
                        <td >Counselors Photo</td>
                    
                        <td>First name</td>
                        <td>Last name</td>
                        <td>Email</td>
                        <td>Phone number</td>
                    
                    </tr>
                    {
                    users.map((item)=>

                        <tr>
                        <td><img height={150} width={200} src={`https://res.cloudinary.com/dxeahbkr4/${item.img}`}/></td>
                    
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone_number}</td>
                        
                    </tr>
                    )
                    }


                </table>
            
       </div>
     
     
    )
}

export default Home;