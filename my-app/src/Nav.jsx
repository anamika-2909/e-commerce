import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  const token = localStorage.getItem("token");

  const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userName");
  localStorage.removeItem("userEmail");

};
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Contact">Contact</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link" to="/Service">Service</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link" to="/product">Manage Product</Link>
        </li>
           
            <li className="nav-item">
          <Link className="nav-link" to="/category">Category</Link>
        </li>

         <li className="nav-item">
          <Link className="nav-link" to="/Show">Show</Link>
        </li>
      </ul>


      
    
      <form className="d-flex gap-3" role="search">
          {token ? (
    <button className="btn btn-danger" onClick={handleLogout}>
      Logout
    </button>
  ) : (
    <>
      <button className="btn btn-outline-success">
        <Link className="nav-link" to="/Register">
          SignUp
        </Link>
      </button>

      <button className="btn btn-outline-success">
        <Link className="nav-link" to="/Loginpage">
          SignIn
        </Link>
      </button>
    </>
  )}
     
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default  Nav