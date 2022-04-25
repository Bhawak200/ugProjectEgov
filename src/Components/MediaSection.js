
import { Link } from "react-router-dom";

const MediaSection = () => {
  return (
    <div className="card-group mediadiv">

      <div className="card media-style card-mediadiv">
        <div className="card-body text-center">
          <p className="card-title">Tutorial</p>
        </div>
      </div>

      <div className="card media-style card-mediadiv">
        <div className="card-body text-center">
          <p className="card-title">Stories</p>
        </div>
      </div>

      <div className="card media-style card-mediadiv">
        <div className="card-body text-center">
          <Link to="/reports" className="link-decoration"> <p className="card-title">Complains</p></Link>
        </div>
      </div>

      <div className="card media-style card-mediadiv">
        <div className="card-body text-center">
          <Link to="/contributors" className="link-decoration"><p className="card-title">Contributors</p></Link>
        </div>
      </div>

    </div>
  )
}

export default MediaSection;