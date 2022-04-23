import Login from "../Login";
import Register from "../Register";
import { Link, useNavigate } from "react-router-dom";
import Complain from "../Complain";
import Dataentry from "../Dataentry"
import Profile from "../Profile";


const Header = (props) => {
  var loggedIn = false;

  const id = localStorage.getItem('id');

  if (id) loggedIn = true;
  else loggedIn = false;

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('id');
    if (!(localStorage.getItem('id'))) window.location.reload();
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary shadow-sm" >
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


            {loggedIn === true ?
              <li className="nav-item">
                <p className="navs" data-bs-toggle="modal" data-bs-target="#profile" style={{ "cursor": "pointer" }}>Profile</p>
              </li>
              : <li></li>
            }
            {loggedIn === true ? <li className="nav-item"><button className="nav-item-btn-2 navs complains" onClick={handleLogout}>Logout</button></li> :
              <li></li>}
            <li className="nav-item">
              {console.log(loggedIn)}
              {
                loggedIn === true ?
                  // <button className="nav-item-btn-1 btn btn-success navs complains" style={{ "marginRight": "0.6rem" }} data-bs-toggle="modal" data-bs-target="#login">Complain</button>
                  // : <button className="nav-item-btn-1 btn btn-success navs complains" style={{ "marginRight": "0.6rem" }} data-bs-toggle="modal" data-bs-target="#login">Sign In</button>
                  <button className="nav-item-btn-1 navs complains" style={{ "marginRight": "0.6rem" }} data-bs-toggle="modal" data-bs-target="#complain">Complain</button>
                  : <button className="nav-item-btn-1 navs complains" style={{ "marginRight": "0.6rem" }} data-bs-toggle="modal" data-bs-target="#login">Sign In</button>
              }
              {
                loggedIn ?
                  <button className="nav-item-btn-2 navs complains" data-bs-toggle="modal" data-bs-target="#dataentry" >Data Entry</button>
                  :
                  <button className="nav-item-btn-2 navs complains" data-bs-toggle="modal" data-bs-target="#register">Register</button>

              }
            </li>
          </ul>
        </div>
      </div>
      <Login />
      <Register />
      <Complain />
      <Dataentry />
      <Profile />
    </nav>
  )
}

export default Header;
