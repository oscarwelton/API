import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "./form";

function User() {
  const [emailCookie, setEmail] = useState("");
  const [apiKeyCookie, setApiKey] = useState("");
  const [showForm, setShowForm] = useState(false);

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  };

  useEffect(() => {
    if (getCookie("email") === undefined) {
      setShowForm(true);
    } else {
      setShowForm(false);
      setEmail(getCookie("email"));
      setApiKey(getCookie("apiKey"));
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
    document.cookie = "apiKey=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setEmail("");
    setApiKey("");
  }

  async function getNewKey() {
    const email = decodeURIComponent(emailCookie);
    try {
      await axios
        .patch(
          "http://localhost:5000/reset",
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
        .then((res) => {
          console.log("response", res);
          if (res.data === "success") {
            const newKey = getCookie("apiKey");
            setApiKey(newKey);
          }
        });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="user">
      {showForm ? (
        <Form />
      ) : (
        <div className="user-details">
          <button onClick={clearData}>Log out</button>
          <h3>Your API Key:</h3>
          <p>
            <strong>Email:</strong> {emailCookie}
          </p>
          <p id="key">
            <strong>API Key:</strong> {apiKeyCookie}
          </p>
          <button onClick={clipboard}>Copy</button>
          <button onClick={getNewKey}>Generate New Key</button>
        </div>
      )}
    </div>
  );
}

export default User;
