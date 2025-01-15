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

  useEffect( () => {
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
        <h2 className='fs-1 text-light text-center'>Who is Neil?</h2>
      </section>

      <section className='mt-5 p-5 bg-black rounded shadow'>
        <h1 className='display-1 text-light fw-bold'>Recent Projects</h1>

        <div className="row">

          <div className="col-md-6">

            <div className="card shadow mx-auto SampleProject text-white" data-aos='flip-up' data-aos-duration='1000'>
              <img src={emd} className="card-img-top img-fluid mx-auto projectImg" alt="EMD"
                style={{width:'18rem', height:'18rem'}}
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
                style={{width:'18rem', height:'18rem'}}
              />
              <div className="card-body">
                <h5 className="card-title text-center mt-1">Pokemon Finder</h5>
                <p className='card-text'>An API Driven Website where you can search for your favorite pokémon</p>
                <button className='btn fw-bold btn-sm btn-light'><a className='Go' target='blank' href="https://project-3-api-driven-website-2.vercel.app/">Go</a></button>
              </div>
            </div>

            <div className="card shadow mt-3 mx-auto SampleProject text-white" data-aos='flip-up' data-aos-duration='1000'>
                <img src={DigiMart} className="card-img-top img-fluid mx-auto projectImg rounded" alt="..."
                  style={{width:'15rem', height:'10rem', marginTop:'15px',}}
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
                  style={{width:'18rem', height:'18rem'}}
                />
                <div className="card-body">
                  <h5 className="card-title text-center mt-1">Dice Game</h5>
                  <p className='card-text'>A JavaScript Game wherein you can battle a computer and whoever gets a higher number wins!</p>
                  <button className='btn fw-bold btn-sm btn-light'><a className='Go' target='blank' href="https://project-2-java-script-game.vercel.app/">Go</a></button>
                </div>
            </div>

            <div className="card shadow mt-3 mx-auto SampleProject text-white" data-aos='flip-up' data-aos-duration='1000'>
                <img src={socMedApp} className="card-img-top img-fluid mx-auto projectImg" alt="..."
                  style={{width:'18rem', height:'18rem'}}
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
