
import { Link } from "react-router-dom";

const MediaSection = () => {
  return (
    <div className="card-group mediadiv">

      <div className="card media-style">
        <div className="card-body text-center">
          <p className="card-title">Tutorial</p>
        </div>
      </div>

      <div className="card media-style">
        <div className="card-body text-center">
          <p className="card-title">Stories</p>
        </div>
      </div>

      <div className="card media-style">
        <div className="card-body text-center">
          <Link to="/reports" className="link-decoration"> <p className="card-title">Reports</p></Link>
        </div>
      </div>

      <div className="card media-style">
        <div className="card-body text-center">
          <p className="card-title">Contributors</p>
        </div>
      </div>

    </div>
  )
}

export default MediaSection;