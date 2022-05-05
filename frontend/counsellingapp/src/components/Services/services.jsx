
import image from '../../assets/images/brain.png';
import family from '../../assets/images/family.png';
import couples from '../../assets/images/couples.png';
import hand from '../../assets/images/hand.png';
import brain from '../../assets/images/brain.png';
import individual from '../../assets/images/individual.png';
import React from 'react'
import servicesStyles from './services.css'

export default function services() {
  return (
    <div className='body' >
    
        <h2 className='head'>Our <br/> Services</h2>
        <p className='service'>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum a qui <br/> 
perferendis quos hic molestias, corrupti numquam dolor ratione mollitia, maiores <br/>
 dolore iusto tempora, iste officiis. Perferendis excepturi aut libero.</p>
        <div className='serve'>
           <div className='d-flex'>
                <div>
                     <img className='img-fluid img1' src={image} />
                </div>
                
                <div className='space'>
                    <h3>Psychology Therapy</h3>
                    <p> Lorem ipsum dolor sit amet <br/> consectetur, adipisicing elit. <br/> Voluptatum a qui perferendis  <br/> quos hic molestias,</p>
                    
                </div>


           </div>


           <div className='d-flex'>

                    <div>
                    <img className='img-fluid img1' src={family} />
                    </div>

                    <div  className='space'>
                    <h3>Families</h3>
                    <p> Lorem ipsum dolor sit amet <br/> consectetur, adipisicing elit. <br/> Voluptatum a qui </p>
                    
                    </div>
               
           </div>

        </div>
        <div className='serve'>
                <div className='d-flex'>
                        <div>
                        <img className='img-fluid img1' src={individual} />
                        </div>
                        
                        <div className='space'>
                            <h3>Individuals</h3>
                            <p> Lorem ipsum dolor sit amet <br/> consectetur, adipisicing elit. <br/> Voluptatum a qui perferendis  <br/> quos hic molestias,</p>
                            
                        </div>


                </div>


                <div className='d-flex'>

                            <div>
                            <img className='img-fluid img1' src={couples} />
                            </div>

                            <div className='space'>
                            <h3>Couples</h3>
                            <p> Lorem ipsum dolor sit amet <br/> consectetur, adipisicing elit. <br/> Voluptatum a qui </p>
                            
                            </div>
                    
                </div>

        </div>
        <div className='approach d-flex '>

                 <div className='move'>
                 <img className='img-fluid img2' src={hand} />
                 </div>
                 <div className='move'>
                    <h3>A Holistic Approach</h3>
                    <h4>The path to mental wellbeing is different <br/>
                         for everyone</h4>
                         <p>We take a personal and considerate  approach to <br/> treating  each patient’s  whole being. Just as great<br/> athletes build up their  physical fitness, we help <br/> those we serve build up mental health<br/>
                           by considering a wide range of factors when<br/> developing a personalised mental healthcare plan.</p>
                        <h4 className='decorate'>Learn More #</h4>
                 </div>








        </div>
  </div>
  )
}
