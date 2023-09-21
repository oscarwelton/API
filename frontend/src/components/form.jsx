import { useState } from "react";
import axios from "axios";

function Form() {
  const [email, setEmail] = useState("");

  async function newUser(email) {
    axios
      .post(
        "http://localhost:5000/new",
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          email: email,
        },
      )
      .then((res) => console.log(res.data));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await newUser(email);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
