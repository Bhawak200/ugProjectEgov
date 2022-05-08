import { useEffect, useState } from "react";
import profilePic from "../Images/profilePic.png"






const Profile = () => {


  /*const [profile] = useState("");
  const [username] = useState("");
  const [email] = useState("");
  const [coins] = useState("");*/

  /*useEffect(() => {
    const current_id = localStorage.getItem('id');
    fetch("http://localhost:4000/users/profile").then(res =>
      res.json()
    ).then((res) => {
      console.log(res);
    });

  }, []);*/


  return (
    <div className="modal fade" id="profile" tabIndex="-1" aria-labelledby="profile" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered  modal-sd">

        <div className="modal-content">
          <div className="container text-center p-3">
            <div className="row">
              <img className="login-title" src={profilePic} alt=" Profile" />
            </div>
            <div className="row">
              <div className="input registerForm">
                <p className="profile-item">Bhawak Anand</p>
                <p className="profile-item profile-email">bhawakanand@gmail.com</p>
                <p className="profile-item">Gold Coins<i className="bi bi-cash-coin"></i> - 0</p>
              </div>
            </div>
            <div className="row login ">
              <button type="submit" className="btn deg_btn" data-bs-dismiss="modal">Close</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;