import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import './Styling/Layout.css'

function Layout() {

    return (
      <main className="d-flex flex-column min-vh-100">
        
        <nav className="navbar navbar-expand-lg bg-dark shadow p-3">
            <div className="container-fluid">
                <Link className="navbar-brand text-white" to='/'>Neil Martin Gamboa
                    <div><h5 className="fs-6 text-secondary fw-light">Front End Developer</h5></div>
                </Link>
            </div>
        </nav>

        <div className="container-fluid bg-dark">
            <Outlet />
        </div>

        <footer className="bg-dark text-center text-light p-3 mt-auto">
                <h5 className="fw-bold">Neil Martin Gamboa</h5>
                <div className="fs-3">
                    <a href="https://github.com/neilmrtngamboa" target="blank" className="icons"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.linkedin.com/in/neilmartingamboa/" target="blank" className="icons"><FontAwesomeIcon icon={faLinkedin} className="ms-3" /></a>
                    
                </div>
                

        </footer>
      </main>
      
    )
  }
  
  export default Layout
  