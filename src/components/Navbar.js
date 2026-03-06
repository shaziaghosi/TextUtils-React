import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" href="#">Home</a>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li> */}
      </ul>
      <div className={`form-check form-switch text-light-${props.mode ==='light'?'dark':'light'}`}>
  <input className="form-check-input"  onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
  <label className="form-check-label" htmlfor="switchCheckDefault">Enable DarkMode</label>
</div>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes ={title:PropTypes.string.isRequired,
    aboutText:PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    title: "set title here",
    aboutText: "About"
}