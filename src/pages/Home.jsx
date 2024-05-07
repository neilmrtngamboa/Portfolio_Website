import './Styling/Home.css'
import resume from '../CV/CV_NeilMartinGamboa.pdf'
import img from '../Images/Portfolio_Img.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


function Home() {

  useEffect( () => {
    Aos.init();
  }, [])

//Main
  return (
    <main className='mt-3 p-3'>
      <div className="row">

        <div className="col-md-6 my-auto" data-aos='fade-up' data-aos-duration='3000'>

          <h3 className='text-light'>Hi! 👋🏼 I'm</h3>
          <h1 className='display-1 fw-bold text-light'>Neil Martin Gamboa</h1>
          <h6 className='fs-4 text-secondary fw-light'>Your Frontend Developer</h6>
          <button className="mt-3 bn5">
            <a href={resume} download='resume' id='CV'>Download CV</a>
          </button>
        </div>

        <div className="col-md-6" data-aos='zoom-in' data-aos-duration='3000'>

          <div className="container">
            <img src={img} alt="mainImg" className='img-fluid ms-1'
            />
          </div>

        </div>

      </div>

      <section className='mt-5 p-5 bg-black rounded shadow'>
        <h1 className='display-1 text-light fw-bold'>Recent Projects</h1>

        <div className="row">

          <div className="col-md-6">

            <div className="card shadow mx-auto SampleProject text-white" data-aos='flip-up' data-aos-duration='1000'>
              <img src="https://cdn.iconscout.com/icon/free/png-256/free-employee-1714118-1459147.png?f=webp" className="card-img-top img-fluid mx-auto projectImg" alt="..."
                style={{width:'15rem', height:'15rem'}}
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
              <img src="https://archive.org/download/PokemonIcon/pokemon%20icon.png" className="card-img-top img-fluid mx-auto p-3 projectImg" alt="..." 
                style={{width:'15rem', height:'15rem'}}
              />
              <div className="card-body">
                <h5 className="card-title text-center mt-1">Pokemon Finder</h5>
                <p className='card-text'>An API Driven Website where you can search for your favorite pokémon</p>
                <button className='btn fw-bold btn-sm btn-light'><a className='Go' target='blank' href="https://project-3-api-driven-website-2.vercel.app/">Go</a></button>
              </div>
            </div>

          </div>

          <div className="col-md-6">

            <div className="card shadow mx-auto SampleProject text-white" data-aos='flip-up' data-aos-duration='1000'>
                <img src="https://cdn-icons-png.flaticon.com/256/246/246569.png" className="card-img-top img-fluid mx-auto p-3 projectImg" alt="..." 
                  style={{width:'15rem', height:'15rem'}}
                />
                <div className="card-body">
                  <h5 className="card-title text-center mt-1">Dice Game</h5>
                  <p className='card-text'>A JavaScript Game wherein you can battle a computer and whoever gets a higher number wins!</p>
                  <button className='btn fw-bold btn-sm btn-light'><a className='Go' target='blank' href="https://project-3-api-driven-website-2.vercel.app/">Go</a></button>
                </div>
            </div>

            <div className="card shadow mt-3 mx-auto SampleProject text-white" data-aos='flip-up' data-aos-duration='1000'>
                <img src="https://cdn4.iconfinder.com/data/icons/podcast-11/64/29-Sport-512.png" className="card-img-top img-fluid mx-auto projectImg" alt="..."
                  style={{width:'15rem', height:'15rem'}}
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
