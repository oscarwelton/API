import { useState } from "react";
import axios from "axios";

function Form() {
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
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
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await newUser(email);
    setFormSubmitted(true);
  };


  const resubmit = () => {
    setEmail("");
    setFormSubmitted(false);
    console.log(email)
  };

  return (
    <div className="form">
      {formSubmitted ? (
        <div className="message">
          <h2>Check your inbox!</h2>
          <p>Verify your email to receive your free API Key</p>
          <p>
            Haven't received anything? Check your spam folder or{" "}
            <span id="form-span" onClick={resubmit}>
              Try Again
            </span>
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
