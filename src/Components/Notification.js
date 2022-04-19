

const Notification = () => {



  return (
    <div className="card border-primary mb-3 notification">
      <div className="card-header"><i className="bi bi-megaphone-fill mx-1"></i><span>Notification</span></div>
      <div className="card-body text-primary notification-item">
        <h5 className="card-title notification-items"><i className="bi bi-file-earmark-plus mx-1"></i><span>Hello World</span></h5>
      </div>
      <div className="card-body text-primary notification-item">
        <h5 className="card-title notification-items"><i className="bi bi-file-earmark-plus mx-1"></i><span>Hello World</span></h5>
      </div>
      <div className="card-body text-primary notification-item">
        <h5 className="card-title notification-items"><i className="bi bi-file-earmark-plus mx-1"></i><span>Hello World</span></h5>
      </div>
      <div className="card-body text-primary notification-item">
        <h5 className="card-title notification-items"><i className="bi bi-file-earmark-plus mx-1"></i><span>Hello World</span></h5>
      </div>
      <div className="card-body text-primary notification-item">
        <h5 className="card-title notification-items more">More....</h5>
      </div>
    </div>
  )
}

export default Notification;