import "./Form.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const [suggestions, setSuggestions] = useState({
    suggestions1: null,
    suggestions2: null,
    suggestions3: null,
    new1: null,
    new2: null,
    new3: null,
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`submitting form `);
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
        navigate("./SuccessPage", { state: { itinerary: suggestions } });
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
            value={suggestions.suggestions1}
            onChange={handleInputChange}
          />
        </label>
        <label>
          1:30 -
          <input
            type="text"
            value={suggestions.suggestions2}
            onChange={handleInputChange}
          />
        </label>
        <label>
          3:30 -
          <input
            type="text"
            value={suggestions.suggestions3}
            onChange={handleInputChange}
          />
        </label>
        <div>Add Times and Suggestions</div>
        <input
          type="text"
          placeholder="example: 4:00 - Pet Iroh"
          value={suggestions.new1}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="example: 7:00 - Look into eachother eyes"
          value={suggestions.new2}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="example: 9:00 - Kith"
          value={suggestions.new3}
          onChange={handleInputChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
