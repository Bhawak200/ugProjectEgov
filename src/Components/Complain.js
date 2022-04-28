import { useState } from "react"
import axios from 'axios';

const Complain = () => {

  const [location, setLocation] = useState("");
  const [imagelink, setImagelink] = useState("");
  const [issue, setIssue] = useState("");
  const [waterbody, setWaterbody] = useState("");


  const handleLocation = (e) => setLocation(e.target.value);
  const handleImagelink = (e) => setImagelink(e.target.value);
  const handleIssue = (e) => setIssue(e.target.value)
  const handleWaterbody = (e) => setWaterbody(e.target.value);


  const handleSubmit = (e) => {
    e.preventDefault();

    const userComplain = {
      id: localStorage.getItem('id'),
      location: location,
      imagelink: imagelink,
      issue: issue,
      waterbody: waterbody
    }

    if (location != "" && issue != "" && imagelink != "" && waterbody != "") {
      // console.log(userComplain);
      axios.post("http://localhost:4000/complain", userComplain).then((response) => {
        console.log(response);
      });
    } else {
      alert('Please complete all the required fields');
    }

  };


  return (
    <div className="modal fade" id="complain" tabIndex="-1" aria-labelledby="complain" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered  modal-sd">
        <div className="modal-content">
          <div className="container p-5">
            <div className="row text-center">
              <p className="login-title"> Complain</p>
            </div>


            <div className="row">
              <div className="input registerForm">
                <input type="text" name="location" autoComplete="off" className="form-control bg-input" placeholder="location" onChange={handleLocation} value={location} />
              </div>
            </div>


            <div className="row">
              <div className="input registerForm">
                <input type="text" name="waterbody" autoComplete="off" className="form-control bg-input" placeholder="type of waterbody" onChange={handleWaterbody} value={waterbody} />
              </div>
            </div>



            <div className="row">
              <div className="input registerForm">
                <textarea type="text" name="issue" autoComplete="off" className="form-control bg-input" placeholder="Short Description" onChange={handleIssue} value={issue} />
              </div>
            </div>




            <div className="row">
              <div className="input registerForm">
                <input type="text" name="imagelink" autoComplete="off" className="form-control bg-input" placeholder="Image Link" onChange={handleImagelink} value={imagelink} />
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

export default Complain;