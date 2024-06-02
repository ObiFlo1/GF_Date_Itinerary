import "./Form.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const [suggestion1, setSuggestion1] = useState(null);
  const [suggestion2, setSuggestion2] = useState(null);
  const [suggestion3, setSuggestion3] = useState(null);
  // If she wants to add goes below
  const [new1, setNew1] = useState(null);
  const [new2, setNew2] = useState(null);
  const [new3, setNew3] = useState(null);
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
        body: JSON.stringify({
          suggestion1: suggestion1,
          suggestion2: suggestion2,
          suggestion3: suggestion3,
          new1: new1,
          new2: new2,
          new3: new3,
        }),
      });
      if (response.ok) {
        console.log("form submitted successfully");
        navigate("./SuccessPage");
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-style">
        <label>
          1:00 -
          <input
            type="text"
            value={suggestion1}
            onChange={(e) => setSuggestion1(e.target.value)}
          />
        </label>
        <label>
          1:30 -
          <input
            type="text"
            value={suggestion2}
            onChange={(e) => setSuggestion2(e.target.value)}
          />
        </label>
        <label>
          3:30 -
          <input
            type="text"
            value={suggestion3}
            onChange={(e) => setSuggestion3(e.target.value)}
          />
        </label>
        <div>Add Times and Suggestions</div>
        <input
          type="text"
          placeholder="example: 4:00 - Pet Iroh"
          value={new1}
          onChange={(e) => setNew1(e.target.value)}
        />
        <input
          type="text"
          placeholder="example: 7:00 - Look into eachother eyes"
          value={new2}
          onChange={(e) => setNew2(e.target.value)}
        />
        <input
          type="text"
          placeholder="example: 9:00 - Kith"
          value={new3}
          onChange={(e) => setNew3(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
