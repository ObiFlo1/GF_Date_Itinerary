import "./SuccessPage.css";
import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="success-page">
      <div className="success-message">Form Submittion was successful !</div>
      <Link to="/" className="success-link">
        Click to go to home page
      </Link>
    </div>
  );
}

export default Success;
