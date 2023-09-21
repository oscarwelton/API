import { useState } from "react";
import axios from "axios";

function Form() {
  const [email, setEmail] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  async function newUser(email) {
    await axios
      .post(
        "http://localhost:5000/new",
        {
          email: email.toLowerCase().trim(),
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        console.log(res);
      });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await newUser(email);

    if (user === "Error") {
      alert("Email already exists");
      return;
    }

    if (user === "Success") {
      setFormSubmitted(true);
    }
  };

  const resubmit = () => {
    setEmail("");
    setFormSubmitted(false);
  };

  return (
    <div className="form">
      {formSubmitted ? (
        <div className="message">
          <h2>Check your inbox!</h2>
          <p>
            An email has been sent to. Verify your email to receive your free
            API Key
          </p>
          <p>
            Not working? <button onClick={resubmit}>Try Again</button>
          </p>
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
              required={true}
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
