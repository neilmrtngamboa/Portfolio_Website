import { Link } from "react-router-dom"
import './Styling/About.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function About() {

  useEffect( () => {
    Aos.init();
  }, [])

  return (
    <>
      <h1 className="display-1 fw-bold ms-5 mt-2 text-light">About</h1>
      <div className="container">
        <p className="intro fs-5 text-light" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">A passionate front-end developer with a keen eye for detail and a love for crafting engaging user experiences. 
          With a solid foundation in HTML, CSS, and JavaScript, 
          I specialize in bringing designs to life while ensuring seamless functionality and optimal performance across various platforms and devices. I thrive in collaborative environments, where I can contribute my creativity and technical expertise to deliver innovative solutions that exceed expectations. 
          <br /> <br />
          <b>Let's build something remarkable together!</b></p>

        <div className="row mt-5">
          <div className="col-md-3">
            <h3>Links</h3>
            <div className="container bg-black rounded p-3">

              <ul>
                <li className="fs-3">
                  <Link to='https://www.linkedin.com/in/neilmartingamboa/' target="blank" className="links">LinkedIn</Link>
                </li>

                <li className="fs-3 mt-3">
                  <Link to='https://github.com/neilmrtngamboa' target="blank" className="links">GitHub</Link>
                </li>

              </ul>

            </div>
          </div>

          <div className="col-md-9">
            <h3 className="text-light">Tech Stack</h3>

            <div className="container bg-dark shadow-lg p-3" data-aos='zoom-in' data-aos-duration='3000'>

              <div className="row">
                <div className="col-md-2">
                  <div className="card p-3">
                    <img className="img-fluid p-1" src="https://static-00.iconduck.com/assets.00/react-icon-256x256-2yyldh38.png" alt="react"
                      
                    />
                  </div>
                </div>

                <div className="col-md-2">
                  <div className="card p-3">
                    <img className="img-fluid p-1" src="https://cdn.iconscout.com/icon/free/png-256/free-bootstrap-6-1175203.png?f=webp" alt="bootstrap"
                    />
                  </div>
                </div>

                <div className="col-md-2">
                  <div className="card p-3">
                    <img className="img-fluid p-1" src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/Tailwind_CSS_Logo.svg_GkNDLAs.png" alt="tailwind"
                    />
                  </div>
                </div>

                <div className="col-md-2">
                  <div className="card p-3">
                    <img className="img-fluid p-1" src="https://mlsb5edd0ks1.i.optimole.com/cb:q7B0.63723/w:502/h:518/q:mauto/f:best/https://keytotech.com/wp-content/uploads/2019/05/firebase.png" alt="firebase"

                    />
                  </div>
                </div>

                <div className="col-md-2">
                  <div className="card p-3">
                    <img className="img-fluid p-1" src="https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=804&h=804&q=75&fit=max&auto=format" alt="figma"
                    />
                  </div>
                </div>

                <div className="col-md-2">
                  <div className="card p-3">
                    <img className="img-fluid p-1" src="https://www.coffeeclass.io/logos/chakra-ui.png" alt="chakra"
                    />
                  </div>
                </div>

              </div>


            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default About
