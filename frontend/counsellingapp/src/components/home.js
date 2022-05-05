import React from 'react'
import '../styles/home.css';
import '../images/Rectangle 4.png'


const home = () => {
    return (
        <>
            <div class="row ">
                <div class="col-4">
                    <h5>Emphathetic,
                    personalized,
                    high-quality mental
                    health care, right here
                    in Kenya</h5>

                    <p>Our services focus on providing whole care. We aim to ensure our clients always feel better.</p>
                </div>
                <div class="col-4 ">
                    <img src='' alt="girl"></img>
                    <button type="button" class="btn btn-lg btn-dark">Dark</button>
                </div>
            </div>

            <div className='Section-b'>
                <h1>Whole Self-Care</h1>

                <h3>MentalHealth takes a unique approach to well being</h3>

                <h5>A new approach to healing clients</h5>
            </div>

            <div className='bottom'>
                <div class='row'>
                    <div class="col-4">
                        <h5>Empathy</h5>
                        <p>Each client experience is customized for the client. 
                            This ensures that we have a deep understanding of your emotions and can fully empathize with your experience.</p>
                    </div>
                    <div class="col-4">
                        <h5>Innovation</h5>
                        <p>We look into incorporating scientific advancement in our treatment plans.</p>
                    </div>
                </div>
                <div class='row '>
                    <div class="col-4">
                        <h5>Prevention</h5>
                        <p>Prevention is better than cure. Always holding on to ensuring your are prepared to address all challenges you experience.</p>
                    </div>
                    
                    <div class="col-4">
                        <h5>Personalization</h5>
                        <p>Tailored for you alone. Every individual experience is different and should be treated in the same way. </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default home;