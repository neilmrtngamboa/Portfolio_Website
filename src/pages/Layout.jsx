import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
function Layout() {

    return (
      <main className="">

        <nav class="flex items-center justify-between flex-wrap bg-stone-500 p-6">

            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <Link className="no-underline" to='/'>Neil Martin Gamboa
                    <div><h5 className="">Front End Developer</h5></div>
                </Link>
            </div>

            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">

                <div class="text-sm lg:flex-grow">
                <Link to='about' class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    About
                </Link>
                <Link to='contact'  class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    Contact
                </Link>
                
                </div>
                
            </div>
        </nav>

        <div className="container-fluid bg-dark">
            <Outlet />
        </div>

        <footer className="bg-dark text-center text-light p-3 mt-auto">
                <h5 className="fw-bold">Neil Martin Gamboa</h5>
                <div className="fs-3">
                    <a href="https://github.com/neilmrtngamboa" target="blank" className="text-secondary"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.linkedin.com/in/neilmartingamboa/" target="blank" className="text-secondary"><FontAwesomeIcon icon={faLinkedin} className="ms-3" /></a>
                    
                </div>
                

        </footer>
      </main>
      
    )
  }
  
  export default Layout
  