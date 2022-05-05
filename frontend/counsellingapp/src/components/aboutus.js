
export default function About(){
  const data = [
    {
      id: "01",
      heading: "30 YEARS",
      desc: "of experience",
    },
    {
      id: "02",
      heading: "100+",
      desc: "Patients",
    },
    {
      id: "03",
      heading: "17",
      desc: "Supervisors",
    },
    {
      id: "04",
      heading: "7k+",
      desc: "hours spent with patients",
    }
  ]

  return(
    <>
      <div className="section">
        <div className="col">
          <h1 className="title">
            About MentalHealth
          </h1>
          <p className="info">
            Making professional therapy accessible, affordable, and convenient — so anyone who struggles with life’s challenges can get help, anytime and anywhere.
          </p>
          <button className="btn">Services</button>
          <button className="btn2"> Contact Us <hr /> </button>
        </div>
        <div className="col">
          <img className="image1" src="/images/health-removebg-preview.png" alt="" />
        </div>
      </div>
      <section className="branding">
        <div className="container grid">
          {data.map((value)=>{
            return (
              <div className="box flex">
                
                <div className="para">
                  <h2>{value.heading}</h2>
                  <p>{value.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
       <div className="section">
        <div className="col">
          <h1 className="title">
            How Cooperation Looks Like?
          </h1>
          <p className="info">
            You can consult a single case or we can have a long term relationship to dive into morecomplicated case.
          </p>
        </div>
        <div className="col">
          <img className="image2" src="/images/images.jpeg" alt="" />
        </div>
      </div>
      <div className="container-grid">
          <div className="contact">
            <img src="" alt="contact" />
            <h2> 1.Contact Us</h2>
            <p> Our support team is always here to answer any question and resolve any problem. Just contact us!
            </p>
          </div>
          <div className="notes">
            <img src="/images/note-removebg-preview.png" alt="" />
            <h2>2.Consult From The Best </h2>
            <p> We offers access to licensed, trained, experienced, and accredited psychologists (PhD / PsyD), marriage and family therapists (LMFT), clinical social workers (LCSW / LMSW), and board licensed professional counselors (LPC).
            </p>
          </div>
          <div className="coop">
            <img src="/images/coop-removebg-preview.png" alt="" />
            <h2>3.Every Week Consultations</h2>
            <p>We are passionate and compassionate professionals, driven by the mission of helping more people live a better and happier life every day. We are growing fast and always looking for new talent. If you love people and like challenges - come and join us!
            </p>
          </div>
      </div>
    </>
  )
}
