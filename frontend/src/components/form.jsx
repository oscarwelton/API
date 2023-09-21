import { useState } from "react";
import axios from "axios";

function Form() {
  const [email, setEmail] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  async function newUser(email) {
    axios
      .post("http://localhost:5000/new", {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        email: email,
      })
      .then((res) => console.log(res.data));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    await newUser(email);
  };

  return (
    <div className="form">
      {formSubmitted ? (
        <div className="message">
          <h2>Check your inbox!</h2>
          <p>Verify your email address to receive your free API Key</p>
        </div>
      ) : (
        <>
          <h3 className="sign-up">
            Sign up to receive your <span>free</span> API key
          </h3>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </>
      )}
    </div>
  );
}

export default Form;
