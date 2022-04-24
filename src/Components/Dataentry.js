
import { useState } from "react"
import axios from 'axios';

const Dataentry = () => {

  const [location, setLocation] = useState("");
  const [waterbody, setWaterbody] = useState("");
  const [data, setData] = useState("");


  const handleLocation = (e) => setLocation(e.target.value);
  const handleWaterbody = (e) => setWaterbody(e.target.value);
  const handleData = (e) => setData(e.target.value)

  const handleSubmit = (e) => {
    
    e.preventDefault();
    const userData = {
      id: localStorage.getItem('id'),
      location: location,
      waterbody: waterbody,
      data: data
    }

    if (location !== "" && waterbody !== "" && data !== "") {
      axios.post("http://localhost:4000/dataentry", userData).then((response) => {
        console.log(response);
      });
    } else {
      alert('Please complete all the required fields');
    }

  };




  return (
    <div className="modal fade" id="dataentry" tabIndex="-1" aria-labelledby="dataentry" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered  modal-sd">
        <div className="modal-content">
          <div className="container p-5">
            <div className="row text-center">
              <p className="login-title"> Data Entry</p>
            </div>

            <div className="row">
              <div className="input registerForm">
                <input type="text" name="location" className="form-control bg-input" placeholder="Location" onChange={handleLocation} value={location} />
              </div>
            </div>

            <div className="row">
              <div className="input registerForm">
                <input type="text" name="waterbody" className="form-control bg-input" placeholder="type of waterbody" onChange={handleWaterbody} value={waterbody} />
              </div>
            </div>

            <div className="row">
              <div className="input registerForm">
                <textarea type="text" name="data" className="form-control bg-input" placeholder="data" onChange={handleData} value={data} />
              </div>
            </div>




            {/* <div className="row">
              <div className="input registerForm">
                <input type="text" name="password" className="form-control bg-input" placeholder="Image Link" onChange={handleImgLink} value={imgLink} />
              </div>
            </div> */}


            <div className="row login">
              <button type="submit" className="btn deg_btn" data-bs-dismiss="modal" onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dataentry;