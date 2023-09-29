import { useState } from "react";
import { useLocation } from 'react-router-dom'
import axios from "axios";
import User from "./user";

function Form() {
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  const location = useLocation();
  console.log(location.pathname);

  async function newUser(email) {
    try {
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
            withCredentials: true,
          }
        )
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        });
    } catch (err) {
      console.log(err);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await newUser(email);
  };

  if (data === "verified" && location.pathname === "/documentation") {
    return (
      <User />
    );
  } else if (data === "verified") {
    return (
      <div className="message">
        <h4>Looks like you've already registered!</h4>
        <p>Visit the documentation to view your API Key.</p>
      </div>
    )
  } else if (data === "unverified" || data === "new user") {
    return (
      <div className="message">
        <h4>Check your inbox!</h4>
        <p>Verify your email to receive your free API Key/</p>
        <p>Haven't received anything? Check your spam folder!</p>
      </div>
    );
  } else {
    return (
      <div className="form">
        <h6 className="sign-up">Sign up to receive your free API key</h6>
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
      </div>
    );
  }
}

export default Form;
