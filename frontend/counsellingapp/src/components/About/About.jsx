import React from 'react'
import AboutStyles from './About.css'
import health from '../../assets/images/health.png';
import consult from '../../assets/images/consult.jpg';
import shake from '../../assets/images/shake.png';
import note from '../../assets/images/note.png';
import cont from '../../assets/images/cont.png';
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
                        <p className='spa'>  of experience</p>
                        <p className='sspa'>Patients</p>
                        <p className='sppa'>Supervisors</p>
                        <p className='spaa'>hours spent witth patients</p>
                    

                     </div>
           </div>
           
                 


           <div className='cooperate'>
                    <div className='coop'>
                    <h2>How Cooperation looks like?</h2>
                    <p>You can consult a single case or we can <br/> have a long term relationship to dive <br/>into morecomplicated case</p>


               
                    </div>
                    <div className='cons'>

                    <img className='img-fluid post' src={consult} />
          
                                
                    </div>


           </div>

           <div className='d-flex consult'> 
               <div>
               <img className='img-fluid posst' src={cont} />
               <br/> <br/>
               <h3>1.Contact Us</h3>
                 <p>
                    Lorem ipsum dolor sit amet <br/> consectetur, adipisicing elit. <br/>  Perspiciatis autem reprehenderit
                    <br/>  provident cum officiis
                    </p>
               </div>
               <div>
               <img className='img-fluid posst' src={note} />
               <br/> <br/>
               <h3>2.Consult From The Best</h3>
               <p>
                Lorem ipsum dolor sit amet <br/> 
                consectetur, adipisicing elit.t <br/> 
                Perspiciatis autem reprehenderit t <br/>
                provident cum officiis?</p>
               </div>
               <div>
               <img className='img-fluid posst' src={shake} />
               <br/> <br/>
               <h3>3.Every Week Consultations</h3>
               <p>
                Lorem ipsum dolor sit amet <br/> 
                consectetur, adipisicing elit.t <br/> 
                Perspiciatis autem reprehenderit t <br/>
                provident cum officiis?</p>
               </div>
          </div>
           <button className='conbtn'>Contact Us</button>









    </div>
  )
}
