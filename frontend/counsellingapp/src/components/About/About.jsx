import React from 'react'
import AboutStyles from './About.css'
import health from '../../assets/images/health.png';
import consult from '../../assets/images/consult.jpg';
export default function About() {
  return (
    <div className='body'>
       <div className='about d-flex'>
         <div className='mental'>
                    <h2>About MentalHealth</h2>
                    <p>
                Lorem ipsum dolor sit amet <br/> consectetur, adipisicing elit.  <br/> 
                Perspiciatis autem reprehenderit  <br/> 
                provident cum officiis? Minus placeat  <br/> 
                tenetur unde rerum sit nemo, nisi <br/> 
                voluptatibus facere beatae magni! <br/> 
                Aliquid inventore unde odit.
                </p>
                <div className='flex'>
                    <button className='buttonn'>Services</button>
                    <h3 className='cont'><span className='under'>Contact</span> Us</h3>
                </div>
            </div>
            <div>
            <img className='img-fluid post' src={health} />
            </div>
       </div>
           <div className='experience'>

           <div className='d-flex exp'>
                      <h1>
                      30 YEARS      </h1>
                       <h1>
                       100+

                        </h1>
                         <h1>
                         17
                          </h1>
                          <h1>
                          7k+
                          </h1>

                  </div>
                    <div className='d-flex exp'>
                        <p>  of experience</p>
                        <p>Patients</p>
                        <p>Supervisors</p>
                        <p>hours spent witth patients</p>
                    

                     </div>
           </div>
           
                 


           <div className='cooperate'>
                    <div className='coop'>
                    <h2>How Cooperation looks like?</h2>
                    <p>You can consult a single case or we can <br/> have a long term relationship to dive <br/>into morecomplicated case</p>


               
                    </div>
                    <div>

                    <img className='img-fluid post' src={consult} />
          
                                
                    </div>


           </div>
           <div>
               <div>
                 
               </div>
               <div>

               </div>
               <div>

               </div>








           </div>










    </div>
  )
}
