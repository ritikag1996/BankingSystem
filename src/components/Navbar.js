import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
   <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:' skyblue'}}>
  <div className="container-fluid">
    <img className="logo" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrj0lqUMFZ3rAysk2sek-D3TO8TRoaisflkSCscU5_sYrqT9ebN9hKXfg7bh1SV4nNwu8&usqp=CAU"/>
    {/* <Link className="navbar-brand" to="/">Navbar</Link> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/customer">View All Customer</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/history">Transfer History</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/about">About us</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}
