import React from "react"

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg fixed-top navbar-light" id="nav">
            <div className="container-fluid">
            <a className="navbar-brand ml-lg-3" href="/">Binar Rental Car</a>
            <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse offcanvas-collapse justify-content-end mr-lg-5" id="navbarTogglerDemo03">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link" href="#services" id="link">Our Services</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#whyus" id="link">Why Us</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#testimonial" id="link">Testimonial</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#FAQ" id="link">FAQ</a>
                </li>
                <li className="nav-item">
                <a href="#" className="btn btn-primary">Register</a>
                </li>
            </ul>
            </div>
            </div>
        </nav>
    )
}

export default Navbar