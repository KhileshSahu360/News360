import React from 'react'
import { Route,Routes,Link } from 'react-router-dom';

const Header = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor:'#900'}}>
  <div className="container-fluid">
    <Link className="navbar-brand mx-3" to="/"><b>News360</b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/bussiness">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="politics">Contact Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Entertainment">Share News</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="sports">Breking News</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header
