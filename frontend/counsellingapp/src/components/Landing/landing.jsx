import React from 'react'
import mental from '../../assets/images/mental.jpg';
import matters from '../../assets/images/matters.jpeg';
import phone from '../../assets/images/phone.jpeg';
import landingStyles from './landing.css'
export default function landing() {
  return (
    <div className='body container-fluid'>

        <div className='d-flex landing'>
                <div>
                    <h1 className='emph'>Emphathetic, <br/>
                        personalized, <br/>
                        high-quality mental <br/>
                        health care, right here in Kenya</h1>

                        <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing <br/>
                        elit. Dolorum sit neque omnis aliquam repellat<br/>
                        aliquid provident impedit non? Quisquam iusto<br/>
                        assumenda delectus et nostrum iure consequatur<br/>
                            voluptas fugit veritatis aliquid!</p>
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
          
           <button className='covid'>covid-19-update</button>
        </div>
         
        <div className='text-center self'>
         <h1>Whole Self-Care</h1>
         <h3>MentalHealth takes a unique approach to well being</h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis repudiandae harum fugiat illo <br/>
          voluptas molestiae unde dolor iure sit et incidunt commodi quod  idolore. </p>
        </div>

      <div className='d-flex lorem'>
                <div className='end'>
                   <h1>Empathy</h1>
                   <p>
                    Lorem ipsum dolor sit amet consectet<br/>
                    ur, adipisicing elit. Perspiciatis autem    <br/>   
                      reprehenderit provident cum officiis? <br/>
                    Minus placeat tenetur unde rerum sit<br/>
                    nemo, nisi voluptatibus facere beatae <br/>
                    magni! Aliquid inventore unde odit.</p>
                </div>
                <div>
                <img className='img-fluid img21' src={phone} />
                </div>
                <div>
                <h1>Innovation</h1>
                   <p>
                    Lorem ipsum dolor sit amet consectetur, <br/>
                    adipisicing elit. Perspiciatis autem<br/>
                    reprehenderit provident cum officiis?<br/> Minus placeat tenet.</p>
                </div>

      </div>
       
      <div className='d-flex loremm'>
                <div className='end'>
                   <h1>Prevention</h1>
                   <p>
                    Lorem ipsum dolor sit amet consectet<br/>
                    ur, adipisicing elit. Perspiciatis autem    <br/>   
                      reprehenderit provident cum officiis? <br/>
                    Minus placeat tenetur unde rerum sit<br/>
                    nemo, nisi voluptatibus facere beatae <br/>
                    magni! Aliquid inventore unde odit.</p>
                </div>
                <div>
                <img className='img-fluid img21' src={matters} />
                </div>
                <div>
                <h1>Personaliztion</h1>
                   <p>
                    Lorem ipsum dolor sit amet consectetur, <br/>
                    adipisicing elit. Perspiciatis autem<br/>
                    reprehenderit provident cum officiis?<br/> Minus placeat tenet.</p>
                </div>

      </div>
       







    </div>
  )
}
