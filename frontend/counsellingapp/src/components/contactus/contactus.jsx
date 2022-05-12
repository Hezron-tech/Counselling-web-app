import React from 'react'
// import 'bootstrap-icons/font/bootstrap-icons.css';

import contactusStyles from './contactus.css'

export default function contactus (){
    return(
        <div className='newe'>
            <div className='container'>
                <div className='contact-header'>
                    <h1>Reach us here for more inquiries</h1>
                </div>
            </div>
            <div className='containerfluid'>
                <div className='row roww '>
                        <div class="col-3 rowww">
                            <h2>Contact Us</h2>

                            <i class="bi bi-telephone-fill">    Phone</i>
                            <h4>+25470616283</h4>

                            <i class="bi bi-envelope-open-fill">    Email</i>
                            <h4>info@counsellingapp.com</h4>

                            <i class="bi bi-geo-alt">    Address</i> 
                            <h4>Westpark Towers, 3rd Floor</h4>
                            <h4>Westlands, Nairobi</h4>
                        </div>


                        <div class="col-sm-5  smm ">
                        <h2>Send A Message</h2>
                            <div className='form-group'>
                                <form name='sendNewMessage'>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <input 
                                                type='text' 
                                                id= 'name' 
                                                className='form-control' 
                                                placeholder='Name' 
                                                name='name' 
                                                required
                                            // onChange={handleChange}
                                            ></input>
                                        </div>
                                        <div className='col-6'>
                                            <input 
                                                type='email' 
                                                id= 'email' 
                                                className='form-control' 
                                                placeholder='Email' 
                                                name='email' 
                                                required
                                            // onChange={handleChange}
                                            ></input>
                                        </div>
                                    </div>
                                    <div className='feedback'>
                                        <div className='form-group'>
                                            <textarea 
                                                type='message' 
                                                id= 'message' 
                                                className='form-control' 
                                                placeholder='Message' 
                                                name='Message' 
                                                rows='4' 
                                            // onChange={handleChange}
                                            ></textarea>
                                        </div>
                                    </div>
                                    <br/>
                                    <button type="submit" class="btn btn-primary  btn-sm">Send Message</button>
                                </form>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}
