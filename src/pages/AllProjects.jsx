import './Styling/AllProjects.css'

function AllProjects() {

  return (
    <main className="">
      <h1 className="text-white mt-5 fw-bolder">All Projects</h1>

      <div className="row p-5">

        <div className="col-md-4">
          <a href="https://project-4-employee-management-dashboard-sigma.vercel.app/" target='blank'>
            <div className="card sampProj">
              <div className="card-body">
                <h5 className="card-title fw-bolder">Employee Database</h5>
                <h6 className="card-subtitle mb-2 text-white-50 fw-lighter">A Employee Database wherein you can apply CRUD.</h6>
                <p className="card-text fw-light">Tools Used: <br /> React, Bootstrap & Firebase</p>
                <p className='fw-lighter'>https://project-4-employee-management-dashboard-sigma.vercel.app/</p>
              </div>
            </div>
          </a>

          <a href="https://project-5-social-media-application-indol.vercel.app/login" target='blank'>
            <div className="card sampProj mt-2">
              <div className="card-body">
                <h5 className="card-title fw-bolder">Social Media Application</h5>
                <h6 className="card-subtitle mb-2 text-white-50 fw-lighter">A sample social media application wherein you can post and delete.</h6>
                <p className="card-text fw-light">Tools Used: <br /> React, Bootstrap & Firebase</p>
                <p className='fw-lighter'>https://project-5-social-media-application-indol.vercel.app/login</p>
              </div>
            </div>
          </a>

        </div>

        <div className="col-md-4">
          <a href="https://project-2-java-script-game.vercel.app/" target='blank'>
              <div className="card sampProj" id='jsGame'>
                <div className="card-body">
                  <h5 className="card-title fw-bolder">JavaScript Game</h5>
                  <h6 className="card-subtitle mb-2 text-white-50 fw-lighter">A sample JavaScript Dice Game.</h6>
                  <p className="card-text fw-light">Tools Used: <br /> Bootstrap & JavaScript</p>
                  <p className='fw-lighter'>https://project-2-java-script-game.vercel.app/</p>
                </div>
              </div>
          </a>

          <a href="https://project-3-api-driven-website-2.vercel.app/" target='blank'>
            <div className="card sampProj mt-2" id='api'>
              <div className="card-body">
                  <h5 className="card-title fw-bolder">API Driven Website</h5>
                  <h6 className="card-subtitle mb-2 text-white-50 fw-lighter">A API Driven Website wherein you can search your favorite Pokemon.</h6>
                  <p className="card-text fw-light">Tools Used: <br /> Bootstrap, JavaScript & Postman</p>
                  <p className='fw-lighter'>https://project-3-api-driven-website-2.vercel.app/</p>
              </div>
            </div>
          </a>

        </div>

        <div className="col-md-4">
        <a href="https://digimart-chi.vercel.app/" target='blank'>
            <div className="card sampProj" id='digiMart'>
              <div className="card-body">
                <h5 className="card-title fw-bolder">DigiMart</h5>
                <h6 className="card-subtitle mb-2 text-white-50 fw-lighter">A sample Digital Marketing Website</h6>
                <p className="card-text fw-light">Tools Used: <br /> React & TailwindCSS</p>
                <p className='fw-lighter'>https://digimart-chi.vercel.app/</p>
              </div>
            </div>
        </a>

        </div>

      </div>
    </main>
  )
}

export default AllProjects
