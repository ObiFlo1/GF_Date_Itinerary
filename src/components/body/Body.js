import "./Body.css";
import Footer from "../footer/Footer";

function Body() {
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
          3:30 - Go to 'la choacana' to get mango ice scream
        </li>
        <li className="list-item"> ~ Interlude ~</li>
      </ul>
      <div>
        <p className="click">👇 Click one👇 </p>
        <Footer />
      </div>
    </div>
  );
}

export default Body;
