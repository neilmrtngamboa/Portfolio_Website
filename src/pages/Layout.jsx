import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
function Layout() {

    return (
      <main className="d-flex flex-column min-vh-100">
        <nav className="navbar navbar-expand-lg bg-transparent p-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>Neil Martin Gamboa
                    <div><h5 className="fs-6 text-secondary fw-light">Front End Developer</h5></div>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto">
                        <Link className="nav-link" to='about'>About</Link>
                        <Link className="nav-link" to='contact'>Contact</Link>
                    </div>
                </div>
            </div>
        </nav>

        <div className="container-fluid">
            <Outlet />
        </div>

        <footer className="bg-transparent text-center text-black p-3 mt-auto">
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
  