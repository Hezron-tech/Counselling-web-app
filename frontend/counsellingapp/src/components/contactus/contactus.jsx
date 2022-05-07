import React from 'react'

import contactusStyles from './contactus.css'

const contactus = () => {
    return (
        <div className='contt'>
            <div id='contact'>
                <div className='container'>
                    <div className='col-md-8'>
                        <div className='row'>
                            <div className='contact-tile'>
                                <h3>Reach out to our team</h3>
                                <p>
                                    For additional inquiries kindly fill in the form and we will reach back out to you as soon as possible. 
                                </p>
                            </div>
                            <form name='newMessage' validate >
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
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
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
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
                                    <div className='col-md-6'>
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
                                </div>
                                <div id='success'></div>
                                <input type="submit" value="send message" class="submit"></input>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default contactus