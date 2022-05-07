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
                <p>Lorem ipsum dolor sit amet consectetur <br/>
                    adipisicing elit. Numquam, deserunt<br/>
                   aliquid odit nemo commodi vero ipsam<br/>
                   quia porro sit error tenetur voluptate<br/>
                    qui ipsa expedita sed repellat hic<br/>
                     eos ratione?</p>
                     <hr/>
                <img className='img-fluid img111' src={brown} />
                <h2>Improvement</h2>

            </div>
            <div>
                
                <img  className='img-fluid img1111' src={modern} />
                <h3 className='good'>I have gotten better</h3>
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Numquam, dese<br/>
                   aliquid odit nemo commodi vero ipsam
                   quia porro sit error tenetur vo<br/>
                    qui ipsa expedita sed repellat hic
                     eos ratione?</p>
            </div>
            <div>
               
                <h3>Many Guides</h3>
                <p>Lorem ipsum dolor sit amet consectetur <br/>
                    adipisicing elit. Numquam, deserunt<br/>
                   aliquid odit nemo commodi vero ipsam<br/>
                   quia porro sit error tenetur voluptate<br/>
                    qui ipsa expedita sed repellat hic<br/>
                     eos ratione?</p>
                <img  className='img-fluid img11111' src={mane} />
            </div>

      </div>
    </div>

  )
}

export default testimonials