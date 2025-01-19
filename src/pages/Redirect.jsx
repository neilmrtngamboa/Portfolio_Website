import './Styling/Redirect.css'
import { Link } from 'react-router-dom'
function NotFound() {

    return (
      <main className="bg-white min-vh-100 text-center">
        <h1 className="fw-bolder" id='oops'>404</h1>
        <div className='fs-2 fw-lighter not' id='not'>that page cannot be found</div>
        <div className='fs-2 fw-lighter not' id='not'>let's get you back</div>
        <Link to='/'>
          <button id='backBtn'>
            Back to Homepage
          </button>
        
        </Link>

      </main>
    )
  }
  
  export default NotFound
  