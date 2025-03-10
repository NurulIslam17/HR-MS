import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
         <div className="container">

            <Link  className='navbar-brand' to='/'><strong>HRM</strong> </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                  <li className="nav-item">
                     <Link  className='nav-link active' to='/'>Home</Link>
                  </li>
                  <li className="nav-item">
                     <Link  className='nav-link active' to='/about'>About</Link>
                  </li>
                  <li className="nav-item">
                     <Link  className='nav-link active' to='/contact'>Contact</Link>
                  </li>
                  <li className="nav-item">
                     <Link  className='nav-link active' to='/faq'>FAQ</Link>
                  </li>
                  <li className="nav-item">
                     <Link className='nav-link btn btn-outline-success rounded-0' to='/'>Login</Link>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
    </>
  )
}

export default Navbar