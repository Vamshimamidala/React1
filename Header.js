import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='container'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">SS</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink  className="nav-link active" aria-current="page" to="/">Home</NavLink >
        </li>
        <li className="nav-item">
          <NavLink  className="nav-link" to="/about">About</NavLink >
        </li>
        <li className="nav-item">
          <NavLink  className="nav-link" to="/exp">Experience</NavLink >
        </li>
        <li className="nav-item">
          <NavLink  className="nav-link" to="/cont">Contact</NavLink >
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header
