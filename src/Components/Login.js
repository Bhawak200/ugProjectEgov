import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom"

const Login = () => {

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => setUserName(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username: username,
      password: password
    };
    // console.log(userData);
    if (password !== "" && username !== "") {
      axios.post("http://localhost:4000/login", userData).then((response) => {
        // console.log(response.status);
        // console.log(response.data.token);
        if (response.data !== '') {
          localStorage.setItem('id', response.data);
          if (localStorage.getItem('id')) window.location.reload();
        } else alert('Please write correct credentials')
      });
    } else {
      alert('Please write correct credentials');
    }
  };


  return (
    <div className="modal fade" id="login" tabIndex="-1" aria-labelledby="login" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered  modal-sd">
        <div className="modal-content">
          <div className="container p-5">
            <div className="row text-center">
              <p className="login-title">LOGIN</p>
              <p className="text-start create">Not Register? <span className="forgot-password" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#register">Create an Account</span></p>
            </div>
            <div className="row">
              <div className="input registerForm">
                <input type="email" name="username" className="form-control bg-input" placeholder="Email.." onChange={handleEmail} value={username} />
              </div>
            </div>
            <div className="row">
              <div className="input registerForm">
                <input type="password" name="password" className="form-control bg-input" placeholder="Password" onChange={handlePassword} value={password} />
              </div>
            </div>
            <div className="row login">
              <button type="submit" className="nav-item-btn-2 btn deg_btn" data-bs-dismiss="modal" onClick={handleSubmit}>Submit</button>
              <p className="text-center text-muted my-3">Forgot Password? <span className="forgot-password">Click Here</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;