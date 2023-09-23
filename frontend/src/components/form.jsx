import { useState } from "react";
import axios from "axios";

function Form() {
  const [email, setEmail] = useState("");
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
          setData(parseInt(res.data));
          console.log(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await newUser(email);
  };

  const resendEmail = () => {
    try {
      console.log(email);
      axios.post(
        "http://localhost:5000/resend",
        {
          email: email.toLowerCase().trim(),
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    } catch (err) {
      console.log(err);
    } finally {
      setData(3);
    }
  };

  if (data === 1) {
    return (
      <div className="message">
        <h4>Look like you've already signed up!</h4>
        <p>
          If you have already confirmed your email, you can view your API Key in
          the documentation.
        </p>
        <p>
          Haven't received an email? Check your spam folder or{" "}
          <span id="form-span" onClick={resendEmail}>
            Resend Confirmation
          </span>
        </p>
      </div>
    );
  } else if (data === 2) {
    return (
      <div className="message">
        <h4>Check your inbox!</h4>
        <p>Verify your email to receive your free API Key</p>
        <p>
          Haven't received anything? Check your spam folder or{" "}
          <span id="form-span" onClick={setData(3)}>
            Try Again
          </span>
        </p>
      </div>
    );
  } else if (data === 3) {
    return (
      <div className="message">
        <h4>Check your inbox!</h4>
        <p>Verify your email to receive your free API Key.</p>
        <p>If you have not received an email from us, please try again later.</p>
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
