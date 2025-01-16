import './Styling/Home.css'
import resume from '../CV/CV_NeilMartinGamboa.pdf'
import img from '../Images/Portfolio_Img.png'
import emd from '../Images/EMD.png'
import jsgame from '../Images/JSGame.png'
import pokemonFinder from '../Images/PokemonFinder.png'
import socMedApp from '../Images/SocMedApp.png'
import DigiMart from '../Images/DigiMart.jpeg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


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

      <section className='bg-black mt-5 p-5'>
        <h2 className='display-1 text-light fw-bold' id='abtMeHeader'>About Me</h2>
        <p className='text-light mt-5 text-center fw-lighter lh-lg'>
          I am a dynamic professional skilled in Front-End Development, LMS Administration, and SEO. My focus is on crafting intuitive and visually engaging web interfaces, efficiently managing learning management systems to improve educational outcomes, and enhancing website performance for optimal search engine rankings. Driven by a passion for innovation and precision, I am dedicated to delivering meaningful solutions that cater
          to user needs and achieve measurable results.
        </p>


        <div className="row">

          <div className="col-md-6">

            <h2 className='display-1 text-light fw-bold mt-5' id='abtMeHeader'>Experience</h2>

            <div className="container-fluid">
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

            <div class="container-fluid text-center">
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

            <div class="container-fluid text-center mt-3">
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

            <div class="container-fluid text-center mt-3">
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

            <div class="container-fluid text-center mt-3">
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

          </div>
        </div>

      </section>

      <section className='mt-5 p-5 bg-black rounded shadow'>
        <h1 className='display-1 text-light fw-bold'>Recent Projects</h1>

        <div className="row">

          <div className="col-md-6">

            <div className="card shadow mx-auto SampleProject text-white" data-aos='flip-up' data-aos-duration='1000'>
              <img src={emd} className="card-img-top img-fluid mx-auto projectImg" alt="EMD"
                style={{ width: '18rem', height: '18rem' }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Employee Records</h5>
                <p className='card-text'>Managing records where you can Create, Read, Update and Delete.</p>
                <button className='btn fw-bold btn-sm btn-light'>
                  <a className='Go' target='blank' href="https://project-4-employee-management-dashboard-sigma.vercel.app/">

                    Go
                  </a>
                </button>
              </div>
            </div>

            <div className="card shadow mt-3 mx-auto SampleProject text-white mb-2" data-aos='flip-up' data-aos-duration='1000'>
              <img src={pokemonFinder} className="card-img-top img-fluid mx-auto p-3 projectImg" alt="..."
                style={{ width: '18rem', height: '18rem' }}
              />
              <div className="card-body">
                <h5 className="card-title text-center mt-1">Pokemon Finder</h5>
                <p className='card-text'>An API Driven Website where you can search for your favorite pokémon</p>
                <button className='btn fw-bold btn-sm btn-light'><a className='Go' target='blank' href="https://project-3-api-driven-website-2.vercel.app/">Go</a></button>
              </div>
            </div>

            <div className="card shadow mt-3 mx-auto SampleProject text-white" data-aos='flip-up' data-aos-duration='1000'>
              <img src={DigiMart} className="card-img-top img-fluid mx-auto projectImg rounded" alt="..."
                style={{ width: '15rem', height: '10rem', marginTop: '15px', }}
              />
              <div className="card-body">
                <h5 className="card-title text-center mt-1">DigiMart</h5>
                <p className='card-text'>A sample Digital Marketing website that offers different services to clients.</p>
                <button className='btn fw-bold btn-sm btn-light'><a className='Go' target='blank' href="https://digimart-chi.vercel.app/">Go</a></button>
              </div>
            </div>

          </div>

          <div className="col-md-6">

            <div className="card shadow mx-auto SampleProject text-white" data-aos='flip-up' data-aos-duration='1000'>
              <img src={jsgame} className="card-img-top img-fluid mx-auto p-3 projectImg" alt="..."
                style={{ width: '18rem', height: '18rem' }}
              />
              <div className="card-body">
                <h5 className="card-title text-center mt-1">Dice Game</h5>
                <p className='card-text'>A JavaScript Game wherein you can battle a computer and whoever gets a higher number wins!</p>
                <button className='btn fw-bold btn-sm btn-light'><a className='Go' target='blank' href="https://project-2-java-script-game.vercel.app/">Go</a></button>
              </div>
            </div>

            <div className="card shadow mt-3 mx-auto SampleProject text-white" data-aos='flip-up' data-aos-duration='1000'>
              <img src={socMedApp} className="card-img-top img-fluid mx-auto projectImg" alt="..."
                style={{ width: '18rem', height: '18rem' }}
              />
              <div className="card-body">
                <h5 className="card-title text-center mt-1">Social Media Application</h5>
                <p className='card-text'>A sample Social Media application wherein you can login, create an account and post!</p>
                <button className='btn fw-bold btn-sm btn-light'><a className='Go' target='blank' href="https://project-5-social-media-application-indol.vercel.app/">Go</a></button>
              </div>
            </div>

          </div>

        </div>

      </section>

    </main>
  )
}

export default Home
