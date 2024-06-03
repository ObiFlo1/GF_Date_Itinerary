import "./Body.css";
import Footer from "../footer/Footer";
import { useLocation } from "react-router-dom";

function Body() {
  const location = useLocation();
  const itinerary = location.state?.itinerary || {};

  // Check if there are any suggestions
  const hasSuggestions = Object.values(itinerary).some((value) => value);

  return (
    <div className="body-container">
      <ul className="plan">
        {!hasSuggestions ? (
          <>
            <li className="list-item">10:30 - Flowers</li>
            <li className="list-item">11:00 -Baseball game starts </li>
            <li className="list-item">
              01:00 - Get some quesadillas w/ guac and sour cream
            </li>
            <li className="list-item">01:30 - Go to park for picnick</li>
            <li className="list-item">
              3:30 - Go to 'la choacana' to get mango ice cream
            </li>
            <li className="list-item"> ~ Interlude ~</li>
          </>
        ) : (
          <>
            {itinerary.suggestion1 && (
              <li className="list-item">1:00 - {itinerary.suggestion1}</li>
            )}
            {itinerary.suggestion2 && (
              <li className="list-item">1:30 - {itinerary.suggestion2}</li>
            )}
            {itinerary.suggestion3 && (
              <li className="list-item">3:30 - {itinerary.suggestion3}</li>
            )}
            {itinerary.new1 && (
              <li className="list-item">5:00 - {itinerary.new1}</li>
            )}
            {itinerary.new2 && (
              <li className="list-item">7:00 -{itinerary.new2}</li>
            )}
            {itinerary.new3 && (
              <li className="list-item">8:00 -{itinerary.new3}</li>
            )}
          </>
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
