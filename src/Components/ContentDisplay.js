


const ContentDisplay = (props) => {
  const { data } = props;
  return (

    <div className="col">
      <div className="complain-card card display-card">
        <div className="complain-card-body card-body display-card-body" >
          <h5 className="complain-card-header card-title">{data.waterbody}</h5>
          <p className="complain-card-text card-text display-text">{data.complain}</p>
        </div>
        <div className="complain-card-footer card-footer">
          <button type="button" className="btn complain-card-button rounded">{data.status} <i className="bi bi-arrow-right"></i></button>
        </div>
      </div>
    </div>
  )
}

export default ContentDisplay;