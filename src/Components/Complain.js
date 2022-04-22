
import { useState } from "react"
import axios from 'axios';

const Complain = () => {

  const [location, setLocation] = useState("");
  const [imgLink, setImgLink] = useState("");
  const [description, setDescription] = useState("");



  const handleLocation = (e) => setLocation(e.location.value);
  const handleImgLink = (e) => setImgLink(e.target.value);
  const handledescription = (e) => setDescription(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault();
    const userComplain = {
      location: location,
      imgLink: imgLink,
      description: description
    }
    /*if (password != "" && username != "") {
      axios.post("http://localhost:4000/login", userData).then((response) => {

        if (response.data != '') {
          localStorage.setItem('id', response.data);
          if (localStorage.getItem('id')) window.location.reload();
        } else alert('Please write correct credentials')
      });
    } else {
      alert('Please write correct credentials');
    }*/
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
                <input type="text" name="password" className="form-control bg-input" placeholder="Location" onChange={handleLocation} value={location} />
              </div>
            </div>
            <div className="row">
              <div className="input registerForm">
                <textarea type="text" name="password" className="form-control bg-input" placeholder="Short Description" onChange={handledescription} value={description} />
              </div>
            </div>
            <div className="row">
              <div className="input registerForm">
                <input type="text" name="password" className="form-control bg-input" placeholder="Image Link" onChange={handleImgLink} value={imgLink} />
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