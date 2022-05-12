import React from 'react'
import mental from '../../assets/images/mental.jpg';
import matters from '../../assets/images/matters.jpeg';


import phone from '../../assets/images/phone.jpeg';

import landingStyles from './landing.css'
export default function landing() {
  let register_redirect = () => {
    window.location.href = "https://www.worldometers.info/coronavirus/";
  }

  
  return (
    <div className='body container-fluid'>

        <div className='d-flex landing'>
                <div>
                    <h1 className='emph'>Emphathetic, <br/>
                        personalized, <br/>
                        high-quality mental <br/>
                        health care, right here in Kenya</h1>

                        <p>
                        Counselling web app is an independent mental health information.  <br/>
                        Our Experts are online now and  waiting to offer psychology therapy<br/>
                        and a varierty of services.<br/>
                        Sign up and book our sessions online for high quality mental health care!!.<br/>
                          </p>


                            


                </div>
                <div>
                <img className='img-fluid img22' src={mental} />
                </div>
        </div>
        <div className='d-flex cov'>
            <div className='d '>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>

            <p>More</p></div>
          
           <button onClick={ register_redirect} className='covid'>covid-19-update</button>
        </div>
         
        <div className='text-center self'>
         <h1>Whole Self-Care</h1>
         <h3>MentalHealth takes a unique approach to well being</h3>
         <p>For many people, self-care is an afterthought, but we believe that self-care is the foundation upon which all healthy habits are built.<br/>
         Let us show you how good taking care of you can feel. </p>
          
        </div>

      <div className='d-flex lorem'>
                <div className='end'>
                   <h1>Empathy</h1>
                   <p>
                   Having a great deal of empathy makes you concerned<br/>
                   for the well-being and happiness of others <br/>   
                   It also means, however,<br/>
                   that you can sometimes get overwhelmed, burned out,<br/>
                   or even overstimulated from always thinking<br/>
                   about other people's emotions.</p>

                       

                </div>
                <div>
                <img className='img-fluid img21' src={phone} />
                </div>
                <div>
                <h1>Innovation</h1>
                   <p>
                    We are a social enterprise leveraging <br/>
                    industry-leading tools and human-centered design<br/>
                    to provide exceptional services in the  area of<br/> data management,capacity,building,emerging technologies,advisory and<br/>  research</p>
                </div>

      </div>
       
      <div className='d-flex loremm'>
                <div className='end'>
                   <h1>Prevention</h1>
                   <p>
                    COVID-19 social Economic impact asssesment<br/>
                    in the comunities,<br/>   
                      Strengthening Goverment Covid-19 response<br/>
                    and implementation of anti-discrimination policies by <br/>
                    by goverment <br/>
                  </p>
                </div>
                <div>
                <img className='img-fluid img21' src={matters} />
                </div>
                <div>
                <h1>Personaliztion</h1>
                   <p>
                   The doctor of the future will give no medicine, <br/>
                   but will interest her or his patients in the care of the human frame,
                   in  <br/>a proper diet, and in the cause and prevention of mental disorder<br/></p>



                    
                </div>

      </div>
       
    </div>
  )
}
