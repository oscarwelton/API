import { useState } from "react";
import axios from "axios";


// function Default() {
//   return (
//     <>
//       <h3 className="sign-up">
//         Sign up to receive your <span>free</span> API key
//       </h3>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           required={true}
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// }

// function Created() {
//   return (
//     <div className="message">
//       <h2>Check your inbox!</h2>
//       <p>Verify your email to receive your free API Key</p>
//       <p>
//         Haven't received anything? Check your spam folder or{" "}
//         <span id="form-span" onClick={resendEmail}>
//           Try Again
//         </span>
//       </p>
//     </div>
//   );
// }

// function Exists() {
//   return (
//     <div className="message">
//       <h2>Look like you've already signed up!</h2>
//       <p>If you have already confirmed your email,
//         you can view your API Key in the documentation.</p>
//       <p>
//         Haven't received an email? Check your spam folder or{" "}
//         <span id="form-span" onClick={resendEmail}>
//           Resend Confirmation
//         </span>
//       </p>
//     </div>
//   );
// }



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
  };

  return (
    <div className="form">
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
    </div>
  );
}







export default Form;
