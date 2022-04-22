import Login from "../Login";
import Register from "../Register";
import { Link, useNavigate } from "react-router-dom";



const Header = (props) => {
  var loggedIn = false;

  const id = localStorage.getItem('id');

  if (id) loggedIn = true;
  else loggedIn = false;

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('id');
    navigate("/");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary shadow-lg" >
      <div className="container-fluid">
        <h1 className="navbar-brand nav-title">EGOV</h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-items">
            <li className="nav-item">
              <Link to="/" className="link-decoration"> <p className="navs">Home</p></Link>
            </li>
            <li className="nav-item">
              <p className="navs">About</p>
            </li>
            <li className="nav-item">
              <p className="navs">Contact</p>
            </li>
            <li className="nav-item">
              {console.log(loggedIn)}
              {
                loggedIn === true ?
                  <button className="btn btn-success navs complains" style={{ "marginRight": "0.1rem", "fontSize": "1.2546rem" }} data-bs-toggle="modal" data-bs-target="#login">Complain</button>
                  : <button className="btn btn-success navs complains" style={{ "marginRight": "0.1rem" }} data-bs-toggle="modal" data-bs-target="#login">Sign In</button>
              }
              {
                loggedIn ?
                  <button className="btn btn-success navs complains" onClick={handleLogout}>Logout</button>
                  :
                  <button className="btn btn-success navs complains" data-bs-toggle="modal" data-bs-target="#register">Register</button>

              }
            </li>
          </ul>
        </div>
      </div>
      <Login />
      <Register />
    </nav>
  )
}

export default Header;
