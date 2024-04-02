import { Link } from "react-router-dom"
import './Styling/About.css'

function About() {

  return (
    <>
      <h1 className="display-1 fw-bold ms-5 mt-2">About</h1>
      <div className="container">
        <h4>Hi! I am a detail oriented developer who is passionate about creating and developing web applications.</h4>

        <div className="row mt-5">
          <div className="col-md-3">
            <h3>Links</h3>
            <div className="container bg-light p-3">

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
            <h3>Tech Stack</h3>

            <div className="container bg-light p-3">

              <div className="row">
                <div className="col-md-2">
                  <div className="card p-3">
                    <img className="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="react"
                      style={{ width: '6rem', height: '5rem' }}
                    />
                  </div>
                </div>

                <div className="col-md-2">
                  <div className="card p-3">
                    <img className="img-fluid" src="https://w7.pngwing.com/pngs/628/224/png-transparent-bootstrap-plain-wordmark-logo-icon.png" alt="bootstrap"
                      style={{ width: '6rem', height: '5rem' }}
                    />
                  </div>
                </div>

                <div className="col-md-2">
                  <div className="card p-3">
                    <img className="img-fluid" src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/Tailwind_CSS_Logo.svg_GkNDLAs.png" alt="tailwind"
                      style={{ width: '6rem', height: '5rem' }}
                    />
                  </div>
                </div>

                <div className="col-md-2">
                  <div className="card p-3">
                    <img className="img-fluid" src="https://mlsb5edd0ks1.i.optimole.com/cb:q7B0.63723/w:502/h:518/q:mauto/f:best/https://keytotech.com/wp-content/uploads/2019/05/firebase.png" alt="firebase"
                      style={{ width: '6rem', height: '5rem' }}
                    />
                  </div>
                </div>

                <div className="col-md-2">
                  <div className="card p-3">
                    <img className="img-fluid" src="https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=804&h=804&q=75&fit=max&auto=format" alt="figma"
                      style={{ width: '6rem', height: '5rem' }}
                    />
                  </div>
                </div>

                <div className="col-md-2">
                  <div className="card p-3">
                    <img className="img-fluid" src="https://www.coffeeclass.io/logos/chakra-ui.png" alt="chakra"
                      style={{ width: '6rem', height: '5rem' }}
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
