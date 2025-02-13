import Aos from 'aos'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Contact() {

    useEffect(() => {
      Aos.init();
    }, [])

  return (
    <section>
      <div className="row p-5" id='contactSec'>
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
            <div className="col-md-6">
              <div className="card" id='socialsContainer1'>
                <a href="https://www.linkedin.com/in/neilmartingamboa/" className='socials' target="blank">
                  <div className="card-body">
                    <FontAwesomeIcon icon={faLinkedinIn} className='fs-1' />
                    <span className='ms-2 fs-5'>LinkedIn</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card" id='socialsContainer2'>
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
  )
}

export default Contact
