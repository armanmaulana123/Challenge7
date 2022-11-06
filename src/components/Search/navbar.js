import { useState, useEffect } from "react";
import useHistory from "react-router-dom";
import { Navigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

async function doLoginWithGoogle(token) {
  // Sesuaikan endpoint
  const response = await fetch("http://localhost:8000/api/v1/google", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token
    }),
  });
  const data = await response.json();
  return data.token;
}

const Navbar = () =>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");


  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [token]);


  function handleLogout(e) {
    setIsLoading(true);
    e.preventDefault();
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setIsLoading(false);
    window.location.replace('/')
  }

  const handleSuccessGoogle = (response) => {
    console.log(response);
    console.log(response.tokenId);
    if(response.tokenId) {
      doLoginWithGoogle(response.tokenId)
        .then((token) => {
            localStorage.setItem("token", token);
            setIsLoggedIn(token);
          })
        .catch((err) => console.log(err.message))
        .finally(() => setIsLoading(false));
      
      // localStorage.setItem("token", response.tokenId);
      // setIsLoggedIn(response.tokenId);

    }
  }

  const handleFailureGoogle = (response) => {
    console.log(response);
    alert(response);
  }

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
                <form className="form-inline my-2 my-lg-0">
                {!isLoggedIn ? (
                    <GoogleLogin 
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    buttonText="Login with Google"
                    onSuccess={handleSuccessGoogle}
                    onFailure={handleFailureGoogle}
                    cookiePolicy={'single_host_origin'}
                    />
                ) : (
                    <input type="submit" className="btn btn-outline-danger" value="Logout" onClick={handleLogout}></input>
                    // <p>test</p>
                )}
                </form>
                </li>
            </ul>
            </div>
            </div>
        </nav>
  )
}

export default Navbar