import { Link } from "react-router-dom";


const Notification = () => {



  return (
    <div className="card border-primary mb-3 notification">
      <div className="card-header"><i className="bi bi-megaphone-fill mx-1"></i><span>Notification</span></div>
      <div className="card-body text-primary notification-item">
        <div className="row">

          <div className="col-1">
            <i className="bi bi-file-earmark-plus" />
          </div>

          <div className="col-11">
            <a style={{ "textDecoration": "none" }} href="https://nrega.nic.in/Netnrega/WriteReaddata/Circulars/VRP_TraningManual.pdf">
              <h5 className="card-title my-3 notification-items">Village Resource Persons Training Manual for Social Audit of MGNREGS.</h5>
            </a>
          </div>

        </div>
      </div>

      <div className="card-body text-primary notification-item">
        <div className="row">

          <div className="col-1">
            <i className="bi bi-file-earmark-plus" />
          </div>

          <div className="col-11">
            <a style={{ "textDecoration": "none" }} href="https://nrega.nic.in/Netnrega/WriteReaddata/Circulars/Guidelines_Planning_for_Works_and_preparation_of_Labour_Budget_NREGA_for_FY_2021-22..pdf">
              <h5 className="card-title notification-items">Guidelines/ framework for Planning for Works and preparation of Labour Budget under MGNREGA for the FY 2021-22.</h5>
            </a>
          </div>

        </div>
      </div>
      <div className="card-body text-primary notification-item">
        <div className="row">

          <div className="col-1">
            <i className="bi bi-file-earmark-plus" />
          </div>

          <div className="col-11">
            <a style={{ "textDecoration": "none" }} href="https://nrega.nic.in/Netnrega/WriteReaddata/Circulars/Guidelines_Planning_for_Works_and_preparation_of_Labour_Budget_NREGA_for_FY_2021-22..pdf">
              <h5 className="card-title my-3 notification-items">SOP for Streamlining Timely Payment MGNREGA</h5>
            </a>
          </div>

        </div>
      </div>
      <div className="card-body text-primary notification-item">
        <div className="row">

          <div className="col-1">
            <i className="bi bi-file-earmark-plus" />
          </div>

          <div className="col-11">
            <a style={{ "textDecoration": "none" }} href="https://nrega.nic.in/netnrega/SupremeCourtMatter.aspx">
              <h5 className="card-title my-3 notification-items">Supreme Court matter: Important communication on pending wage liability.</h5>
            </a>
          </div>

        </div>
      </div>
      <div className="card-body text-primary notification-item">
        <h5 className="card-title my-3 notification-items more">More....</h5>
      </div>
    </div>
  )
}

export default Notification;