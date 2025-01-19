import './Styling/Home.css'
import resume from '../CV/CV_NeilMartinGamboa.pdf'
import img from '../Images/Portfolio_Img.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom'


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

      <section className='bg-black mt-5 p-5'> {/*About Me Section*/}
        <h2 className='display-1 text-light fw-bold' id='abtMeHeader' data-aos="fade-right" data-aos-duration="2000">About Me</h2>
        <p className='text-light mt-5 text-center fw-lighter lh-lg'>
          I am a dynamic professional skilled in Front-End Development, LMS Administration, and SEO. My focus is on crafting intuitive and visually engaging web interfaces, efficiently managing learning management systems to improve educational outcomes, and enhancing website performance for optimal search engine rankings. Driven by a passion for innovation and precision, I am dedicated to delivering meaningful solutions that cater
          to user needs and achieve measurable results.
        </p>


        <div className="row">

          <div className="col-md-6">

            <h2 className='display-1 text-light fw-bold mt-5' id='abtMeHeader'>Experience</h2>

            <div className="container-fluid" data-aos="zoom-in" data-aos-duration="2000">
              <div className="d-flex">
                <div class="spinner-grow spinner-grow-sm text-light" role="status">
                  <span class="visually-hidden my-auto">Loading...</span>
                </div>
                <p className='ms-3 text-light my-auto fw-lighter'>BS Information Technology <br />San Beda University
                  <div className='mt-2'>
                    <span id='yr'>2022</span>
                  </div>

                </p>

              </div>

              <div className="d-flex mt-4">
                <div class="spinner-grow spinner-grow-sm text-light" role="status">
                  <span class="visually-hidden my-auto">Loading...</span>
                </div>
                <p className='ms-3 text-light my-auto fw-lighter'>Instructional Technologist <br />Mapua University
                  <div className='mt-2'>
                    <span id='yr'>2023</span>
                  </div>

                </p>

              </div>

              <div className="d-flex mt-4">
                <div class="spinner-grow spinner-grow-sm text-light" role="status">
                  <span class="visually-hidden my-auto">Loading...</span>
                </div>
                <p className='ms-3 text-light my-auto fw-lighter'>SEO Analyst <br />Brand That Name (Digital Marking Agency)
                  <div className='mt-2'>
                    <span id='yr'>2024</span>
                  </div>

                </p>

              </div>

              <div className="d-flex mt-4">
                <div class="spinner-grow spinner-grow-sm text-light" role="status">
                  <span class="visually-hidden my-auto">Loading...</span>
                </div>
                <p className='ms-3 text-light my-auto fw-lighter'>SEO Specialist <br />GrowDigi (Digital Marking Agency)
                  <div className='mt-2'>
                    <span id='yr'>2024</span>
                  </div>

                </p>

              </div>


            </div>
          </div>

          <div className="col-md-6">
            <h2 className='display-1 text-light fw-bold mt-5' id='abtMeHeader'>Tech Stack</h2>

            <div class="container-fluid text-center" data-aos="zoom-in-left" data-aos-duration='1000'>
              <div class="row justify-content-around">
                <span class="col-md-4 tech">
                  HTML
                </span>
                <span class="col-md-4 tech">
                  CSS
                </span>
                <span class="col-md-4 tech">
                  JavaScript
                </span>
              </div>
            </div>

            <div class="container-fluid text-center mt-3" data-aos="zoom-in-left" data-aos-duration='1000'>
              <div class="row justify-content-around">
                <span class="col-md-4 tech">
                  Bootstrap
                </span>
                <span class="col-md-4 tech">
                  TailwindCSS
                </span>
                <span class="col-md-4 tech">
                  ReactJS
                </span>
              </div>
            </div>

            <div class="container-fluid text-center mt-3" data-aos="zoom-in-left" data-aos-duration='1000'>
              <div class="row justify-content-around">
                <span class="col-md-4 tech">
                  Figma
                </span>
                <span class="col-md-4 tech">
                  Postman
                </span>
                <span class="col-md-4 tech">
                  Firebase
                </span>
              </div>
            </div>

            <div class="container-fluid text-center mt-3" data-aos="zoom-in-left" data-aos-duration='1000'>
              <div class="row justify-content-around">
                <span class="col-md-4 tech">
                  MySQL
                </span>
                <span class="col-md-4 tech">
                  Ahrefs
                </span>
                <span class="col-md-4 tech">
                  SemRush
                </span>
              </div>
            </div>

            <h3 className='display-1 text-light fw-bold mt-5' id='abtMeHeader'>Recent Projects</h3>
            <div className="row mt-2">

              <div className="col-md-6">
                <a href="https://project-4-employee-management-dashboard-sigma.vercel.app/" target='blank' className='sampleWeb'>
                  <div className="card bg-black text-light border" id='projContainer' style={{ width: '15rem', height: '7rem' }}>
                    <div className="card-body">
                      Employee Database
                      <p className='card-text fw-lighter'>A sample database wherein you can apply CRUD.</p>
                    </div>
                  </div>
                </a>

              </div>

              <div className="col-md-6">

                <a href="https://project-5-social-media-application-indol.vercel.app/" target='blank' className='sampleWeb'>
                  <div className="card text-light border" id='projContainer' style={{ width: '15rem', height: '7rem' }}>
                    <div className="card-body">
                      Social Media Application
                      <p className='card-text fw-lighter'>A sample social media application.</p>
                    </div>
                  </div>
                </a>

              </div>
              <span className='mt-3'>
                <Link to='' id='viewProj' style={{ fontFamily: 'Courier' }}>
                  View all
                  <svg xmlns="http://www.w3.org/2000/svg" className='ms-2 mx-auto my-auto' width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                  </svg>
                </Link>
              </span>

            </div>





          </div>
        </div>

      </section> {/*End of About Me Section*/}

      {/*Contact Section*/}
      <section>
        <div className="row p-5">
          <div className="col-md-6 mx-auto my-auto"> {/*First Column of Contact Section*/}
            <p className='text-light fw-bold display-1' id='start' data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">Want to start <br /> a project?</p>

          </div>

          <div className="col-md-5 my-auto" data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"> {/*Second Column of Contact Section*/}
            <a href='mailto:nmg.gamboa@gmail.com' id='emailLink'>
              <p className='display-6 fw-lighter' id='email'>nmg.gamboa@gmail.com</p>
            </a>

            <div className="row">
              <div className="col-md-5">
                <div className="card" id='socialsContainer1' style={{ width: '9.5rem', height: '4rem' }}>
                  <a href="https://www.linkedin.com/in/neilmartingamboa/" className='socials' target="blank">
                    <div className="card-body">
                      <FontAwesomeIcon icon={faLinkedinIn} className='fs-1' />
                      <span className='ms-2 fs-5'>LinkedIn</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-md-5">
                <div className="card" id='socialsContainer2' style={{ width: '9.5rem', height: '4rem' }}>
                  <a href="https://github.com/neilmrtngamboa" className='socials' target="blank">
                    <div className="card-body">
                      <FontAwesomeIcon icon={faGithub} className='fs-1' />
                      <span className='ms-2 fs-5'>GitHub</span>
                    </div>
                  </a>
                </div>

              </div>
            </div>

          </div> {/*End of the 2nd Column of Contact Section*/}
        </div>

      </section>
      {/*End of Contact Section*/}

    </main>
  )
}

export default Home
