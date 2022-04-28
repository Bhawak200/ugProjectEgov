import {useState, useEffect} from "react";

const DataComponent = () => {

  const [complainLen,setComplainLen] = useState("");


  useEffect(() => {
    var complainLen = 0;

    fetch("http://localhost:4000/users").then(res =>
      res.json()
    ).then((res) => {
      for (var i = 0; i < res.length; i++) {
          complainLen += res[i].complain.length;
      }
      console.log(complainLen);

    });

    let valueDisplay = document.querySelectorAll(".card-text");
    let interval = 4000;
    valueDisplay.forEach(val => {
      let startValue = 0;
      let endValue = parseInt(val.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(() => {
        startValue += 1;
        val.textContent = startValue;
        if (startValue === endValue) clearInterval(counter);
      }, duration)
    });

  }, []);




  return (
    <div className="data-style">
      <h1 className="text-center data-text">Important Data</h1>
      <div className="card-group">
        <div className="card data-card">
          <div className="card-body text-center">
            <h5 className="card-title"><i className="bi bi-card-list icons"></i></h5>
            <p className="card-text" data-val= "500">0</p>
            <h5 className="complain-card-title card-title">Total Complains</h5>
          </div>
        </div>

        <div className="card data-card">
          <div className="card-body text-center">
            <h5 className="card-title"><i className="bi bi-people-fill icons"></i></h5>
            <p className="card-text" data-val="500">0</p>
            <h5 className="complain-card-title card-title">Total Workers</h5>
          </div>
        </div>

        <div className="card data-card">
          <div className="card-body text-center">
            <h5 className="card-title"><i className="bi bi-clipboard-check-fill icons"></i></h5>
            <p className="card-text" data-val="500">0</p>
            <h5 className="complain-card-title card-title">Complains Resolved</h5>
          </div>
        </div>

      </div>
    </div>
  )
}

export default DataComponent;