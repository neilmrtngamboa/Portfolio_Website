import './Styling/Home.css'
import resume from '../CV/Resume_NeilMartinGamboa.pdf'
import img from '../Images/Portfolio_Img.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import About from './About'
import Contact from './Contact'



function Home() {

  useEffect(() => {
    Aos.init();
  }, [])

  //Main
  return (
    <main id='bg' className='p-5'>

      <div className="row">

        <div className="col-md-6 my-auto" data-aos='fade-up' data-aos-duration='3000'>

          <h3 className='text-light fw-lighter'>Hi there! I'm</h3>
          <h1 className='display-1 fw-bold text-light'>Neil Martin Gamboa,</h1>
          <h6 className='display-5 fw-bold text-light'>Front-End Developer</h6>
          <p className='fs-4 text-light fw-lighter'>Bringing ideas to life with code.</p>
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <button className="mt-3" id='dlCV'>
                  <a href={resume} download='resume' id='CV'>Download CV</a>
                </button>
              </div>

              <div className="col-md-5">
                <button className="mt-3" id='dlCV'>
                  Learn More
                </button>
              </div>


            </div>

          </div>

        </div>

        <div className="col-md-6" data-aos='zoom-in' data-aos-duration='3000'>

          <div className="container">
            <img src={img} alt="mainImg" className='img-fluid ms-1' id='mainImg'
            />
          </div>

        </div>

      </div>
      <About />
      <Contact/>

    </main>

    
  )
}

export default Home
