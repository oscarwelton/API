import { useState } from "react";
import axios from "axios";
import cookie from 'js-cookie'

function Form() {
  const [email, setEmail] = useState("");
  const [emailCookie, setEmailCookie] = useState('')
  const [apiKeyCookie, setApiKeyCookie] = useState('')
  const [data, setData] = useState([]);

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
          }
        )
        .then((res) => {
          setData(res.data);
          if (res.data === 'verified') {
            setEmailCookie(cookie.get('email'))
            setApiKeyCookie(cookie.get('apiKey'))
          }
        });
    } catch (err) {
      console.log(err);
    }

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await newUser(email);
  };

  if (data === 'verified') {
    return (
    <div className="message">
      <p>Email: {emailCookie}</p>
      <p>Api Key: {apiKeyCookie}</p>
    </div>
    )
  } else if (data === 'unverified') {
    return (
      <div className="message">
        <h4>Check your inbox!</h4>
        <p>Verify your email to receive your free API Key</p>
        <p>
          Haven't received anything? Check your spam folder or{" "}
        </p>
      </div>
    );
  } else if (data === 'new user') {
    return (
      <div className="message">
        <h4>Check your inbox!</h4>
        <p>Verify your email to receive your free API Key.</p>
        <p>
          If you have not received an email from us, please try again later.
        </p>
      </div>
    );
  } else {
    return (
      <div className="form">
        <h6 className="sign-up">
          Sign up to receive your <span>free</span> API key
        </h6>
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
