
import { useState } from "react";



const Register = () => {

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => setUserName(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);



  const handleSubmit = async () => {
    const data = {
      username: username,
      password: password
    }
    console.log(data);
    const response = await fetch('http://localhost:8000/register', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data)
    });
    console.log("response: ", response.json());
    return response;
  }






  return (
    <div className="modal fade" id="register" tabIndex="-1" aria-labelledby="register" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered  modal-sd">
        <div className="modal-content">
          <div className="container p-5">
            <div className="row text-center">
              <p className="login-title">REGISTER</p>
              <p className="text-start create"> Already Register? <span className="forgot-password" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#login">Sign In</span></p>
            </div>
            <div className="row">
              <div className="input registerForm">
                <input type="text" className="form-control bg-input" placeholder="Email id.." onChange={handleEmail} value={username} />
              </div>
            </div>
            <div className="row">
              <div className="input registerForm">
                <input type="password" className="form-control bg-input" placeholder="Password" onChange={handlePassword} value={password} />
              </div>
            </div>
            <div className="row login">
              <button type="submit" className="btn deg_btn" data-bs-dismiss="modal" onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;