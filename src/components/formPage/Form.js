import "./Form.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const [suggestions, setSuggestions] = useState({
    suggestion1: "",
    suggestion2: "",
    suggestion3: "",
    new1: "",
    new2: "",
    new3: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`submitting form `);

    // For now, directly navigate to the SuccessPage for testing
    navigate("/", { state: { itinerary: suggestions } });

    // If you need to actually submit the form to a server, uncomment the following code

    try {
      const response = await fetch("/SuccessPage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(suggestions),
      });
      if (response.ok) {
        console.log("form submitted successfully");
        navigate("/SuccessPage", { state: { itinerary: suggestions } });
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSuggestions({ ...suggestions, [name]: value });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-style">
        <label>
          1:00 -
          <input
            type="text"
            name="suggestion1"
            value={suggestions.suggestion1}
            onChange={handleInputChange}
          />
        </label>
        <label>
          1:30 -
          <input
            type="text"
            name="suggestion2"
            value={suggestions.suggestion2}
            onChange={handleInputChange}
          />
        </label>
        <label>
          3:30 -
          <input
            type="text"
            name="suggestion3"
            value={suggestions.suggestion3}
            onChange={handleInputChange}
          />
        </label>
        <div>Add Times and Suggestions</div>
        <label>
          5:00 -
          <input
            type="text"
            name="new1"
            placeholder="example: 4:00 - Pet Dogs"
            value={suggestions.new1}
            onChange={handleInputChange}
          />
        </label>
        <label>
          7:00 -
          <input
            type="text"
            name="new2"
            placeholder="example: 7:00 - Go to Zoo"
            value={suggestions.new2}
            onChange={handleInputChange}
          />
        </label>
        <label>
          8:00 -
          <input
            type="text"
            name="new3"
            placeholder="example: 9:00 - Bake a cake"
            value={suggestions.new3}
            onChange={handleInputChange}
          />
          <input type="submit" value="Submit" />
        </label>
      </form>
    </div>
  );
}

export default Form;
