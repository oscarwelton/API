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

  function clearData() {
    setShowForm(true);
    document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "apiKey=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    setEmail("");
    setApiKey("");
  }

  return (
    <div className="user">
      {showForm ? (
        <Form />
      ) : (
        <div className="user-details">
          <button onClick={clearData}>clear</button>
          <h3>Account Details</h3>
          <p><strong>Email:</strong> {emailCookie}</p>
          <p id="key"><strong>API Key:</strong> {apiKeyCookie}</p>
          <button onClick={clipboard}>Copy</button>
        </div>
      )}
    </div>
  );
}

export default User;
