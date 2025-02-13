import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Layout from './pages/Layout.jsx';
import NotFound from './pages/Redirect.jsx';
import AllProjects from './pages/AllProjects.jsx';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='allprojects' element={<AllProjects />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      
      </BrowserRouter>

    </>
  )
}

export default App;
