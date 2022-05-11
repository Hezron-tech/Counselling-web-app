
import image from '../../assets/images/brain.png';
import family from '../../assets/images/family.png';
import couples from '../../assets/images/couples.png';
import hand from '../../assets/images/hand.png';
import brain from '../../assets/images/brain.png';
import individual from '../../assets/images/individual.png';
import React from 'react'
import servicesStyles from './services.css'

export default function services() {
  let register_redirect = () => {
    window.location.href = "/home";
  }
  let med_redirect = () => {
    window.location.href = "/medication";
  }
  return (

    <div className='body' >
    
        <h2 className='head'>Our <br/> Services</h2>
        <p className='service'>
        At your appointment, you'll be encouraged to talk about your feelings and emotions <br/>
        with a trained therapist, who'll listen and support you without judging or criticising.<br/>
        The therapist can help you gain a better understanding of your feelings and thought processes, and find your own solutions to problems</p>

 
        <div className='serve'>
           <div className='d-flex'>
                <div>
                     <img className='img-fluid img1' src={image} />
                </div>
                
                <div className='space'>
                    <h3>Psychology Therapy</h3>
                    <p> We help people with a broad variety of mental illnesses<br/>and emotional difficulties.<br/> we help eliminate or control troubling symptoms so a person can function better <br/>and can increase well-being and healing.</p>
                    
                </div>


           </div>


           <div className='d-flex'>

                    <div>
                    <img className='img-fluid img1' src={family} />
                    </div>

                    <div  className='space'>
                    <h3>Families</h3>
                    <p>We can help family members improve communication and resolve conflicts <br/> our therapy is often short term <br/> your specific treatment plan will depend on your family's situation.</p>
                    
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
                            <p> Our goal is  to inspire change and improve quality of life <br/> We help people overcome obstacles to their well-being <br/> we increase positive feelings, such as compassion and self-esteem <br/> People in our therapy session learn skills for handling difficult situations, making healthy decisions, and reaching goals.</p>
                            
                        </div>


                </div>


                <div className='d-flex'>

                            <div>
                            <img className='img-fluid img1' src={couples} />
                            </div>

                            <div className='space'>
                            <h3>Couples</h3>
                            <p>We address a wide range of relationship issues<br/> including recurring conflicts <br/>feelings of disconnection, an affair, issues related to sex, or difficulties due to external stressors</p>
                            
                            </div>
                    
                </div>

        </div>
        <div className='counse'>
        <button onClick={register_redirect} >Our counselors</button>
        <button onClick={med_redirect} >Available Medicines</button>
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