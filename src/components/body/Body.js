import "./Body.css";
import Footer from "../footer/Footer";
import { useLocation } from "react-router-dom";

function Body() {
  const location = useLocation();
  const itinerary = location.state?.itinerary || {};
  return (
    <div className="body-container">
      <ul className="plan">
        <li className="list-item">10:30 - I pick you up from your house</li>
        <li className="list-item">11:00 - Shiloh's Baseball game starts </li>
        <li className="list-item">
          {" "}
          01:00 - Get some quesedias w/ quac and sour cream{" "}
        </li>
        <li className="list-item">
          {" "}
          01:30 - Go to park for picnic, Lancaster City Park{" "}
        </li>
        <li className="list-item">
          {" "}
          3:30 - Go to 'la choacana' to get mango ice scream{" "}
        </li>
        <li className="list-item"> ~ Interlude ~</li>
        {itinerary.suggestion1 && (
          <li className="list-item">1:00 - {itinerary.suggestion1}</li>
        )}
        {itinerary.suggestion2 && (
          <li className="list-item">1:00 - {itinerary.suggestion2}</li>
        )}
        {itinerary.suggestion3 && (
          <li className="list-item">1:00 - {itinerary.suggestion3}</li>
        )}
        {itinerary.new1 && (
          <li className="list-item">1:00 - {itinerary.new1}</li>
        )}
        {itinerary.new2 && (
          <li className="list-item">1:00 - {itinerary.new2}</li>
        )}
        {itinerary.new3 && (
          <li className="list-item">1:00 - {itinerary.new3}</li>
        )}
      </ul>
      <div>
        <p className="click">👇 Click one👇 </p>
        <Footer />
      </div>
    </div>
  );
}

export default Body;
