import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="button-container">
      <Link to="/Enjoy-Your-Date" className="btn">
        I like Plan
      </Link>

      <Link to="/form" className="btn">
        Suggest Changes
      </Link>
    </div>
  );
}

export default Footer;
