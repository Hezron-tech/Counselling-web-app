import React ,{useEffect,useState} from 'react'
import '../styles/home.css';

const Medication = () => {
    const [users,setUser]=useState([])
    useEffect(() =>{
        fetch("https://counselapi.herokuapp.com/api/medication/").then((result)=>{
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
                        <td >Medication Photo</td>
                    
                        <td>name</td>
                        <td>Description</td>
                      
                    
                    </tr>
                    {
                    users.map((item)=>

                        <tr>
                        <td><img height={150} width={200} src={`https://res.cloudinary.com/dxeahbkr4/${item.image}`}/></td>
                    
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                       
                        
                    </tr>
                    )
                    }


                </table>
            
       </div>
     
     
    )
}
export default Medication