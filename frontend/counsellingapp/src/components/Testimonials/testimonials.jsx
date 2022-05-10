import React from 'react'
import testimonialsStyles from './testimonials.css'
import mane from '../../assets/images/mane.jpg';
import modern from '../../assets/images/lend.jpeg';
import brown from '../../assets/images/brown.jpg';

function testimonials() {
  return (
    <div className='tes'>
     <h1 className='tests'>Testimonials</h1>
      <div className='testimony'>
            <div>
                <h2>Amazing experience</h2>
                <p>I’ve already recommended their website to 3 more friends <br/>
                and I’m honestly going to tell as many people <br/>
                as possible about it I’m so grateful for this service.<br/>
                   <br/>
                   I love my therapist!</p>
                     <hr/>

                       

                <img className='img-fluid img111' src={brown} />
                <h2>Improvement</h2>

                <p>Wonderful. Such a big help to my mental health.</p>

            </div>
            <div>
                
                <img  className='img-fluid img1111' src={modern} />
                <h3 className='good'>I have gotten better</h3>
                <p> Would highly recommend, very knowledgeable and <br/>
                has a great balance of listening and offering advice
                  </p>


                    
            </div>
            <div>
               
                <h3>Many Guides</h3>
                <p>I’ve seen so many therapists <br/> in the past, but none have ever had such an immediate grasp <br/>
                at my past traumas and current struggles from that.<br/>
                I’m already so encouraged by my growth  <br/> and comforted by her understanding and directions.<br/>
                I can’t recommend her enough, I’m just so thankful I finally found someone<br/>
                who can work with me through the deeper things<br/>
                that affect my every day mental health.?</p>



                          
                <img  className='img-fluid img11111' src={mane} />
            </div>

      </div>
    </div>

  )
}

export default testimonials