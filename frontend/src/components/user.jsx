import React, { useState, useEffect } from "react";
import Form from "./form";

function User() {
  const [emailCookie, setEmail] = useState("");
  const [apiKeyCookie, setApiKey] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
    };

    if (getCookie("email") === undefined) {
      setShowForm(true);
    } else {
      setShowForm(false);
      setEmail(getCookie("email"));
      setApiKey(getCookie("apiKey"));
      console.log(emailCookie, apiKeyCookie);
    }
  }, []);

  function clipboard() {
    const id = document.getElementById("key");
    const text = id.innerText;
    navigator.clipboard.writeText(text);
    alert("API Key Copied to clipboard!");
  }

  return (
    <div className="user">
      {showForm ? (
        <Form />
      ) : (
        <div className="user-details">
          <p><strong>Email:</strong> {emailCookie}</p>
          <p id="key"><strong>API Key:</strong> {apiKeyCookie}</p>
          <button onClick={clipboard}>Copy</button>
        </div>
      )}
    </div>
  );
}

export default User;
