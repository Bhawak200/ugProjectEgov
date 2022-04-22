import { useEffect } from "react"

const DataComponent = () => {

  useEffect(() => {
    let valueDisplay = document.querySelectorAll(".card-text");
    let interval = 10000;
    valueDisplay.forEach(val => {
      let startValue = 0;
      let endValue = parseInt(val.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(() => {
        startValue += 1;
        val.textContent = startValue;
        if (startValue === endValue) clearInterval(counter);
      }, duration)
    })
  }, [])


  return (
    <div className="data-style">
      <h1 className="text-center data-text"><span className="important-data">Import</span>ant Data</h1>
      <div className="card-group">
        <div className="card data-card">
          <div className="card-body text-center">
            <h5 className="card-title"><i className="bi bi-card-list icons"></i></h5>
            <p className="card-text" data-val="450">0</p>
            <h5 className="card-title">Total Complains</h5>
          </div>
        </div>

        <div className="card data-card">
          <div className="card-body text-center">
            <h5 className="card-title"><i className="bi bi-people-fill icons"></i></h5>
            <p className="card-text" data-val="500">0</p>
            <h5 className="card-title">Total Workers</h5>
          </div>
        </div>

        <div className="card data-card">
          <div className="card-body text-center">
            <h5 className="card-title"><i className="bi bi-clipboard-check-fill icons"></i></h5>
            <p className="card-text" data-val="250">0</p>
            <h5 className="card-title">Complains Resolved</h5>
          </div>
        </div>

      </div>
    </div>
  )
}

export default DataComponent;