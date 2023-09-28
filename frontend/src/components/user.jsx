import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "./form";
import { useLocation } from "react-router-dom";

function User() {
  const [emailCookie, setEmail] = useState("");
  const [apiKeyCookie, setApiKey] = useState("");
  const [showForm, setShowForm] = useState(false);
  const location = useLocation();

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
      setEmail(decodeURIComponent(getCookie("email")));
      setApiKey(getCookie("apiKey"));
    }
  }, []);

  function clipboard() {
    const id = document.getElementById("key");
    const text = id.innerText;
    navigator.clipboard.writeText(text);
    console.log("Copied to clipboard");
  }

  function clearData() {
    setShowForm(true);
    document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "apiKey=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setEmail("");
    setApiKey("");
  }

  async function getNewKey() {
    console.log(location.pathname);
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
          if (res.data === "success") {
            const newKey = getCookie("apiKey");
            setApiKey(newKey);
          }
        });
    } catch (err) {
      console.log(err);
    }
  }

  return showForm ? (
    <Form />
  ) : (
    <div className="user">
      <button id="logout" className="docs-btn" onClick={clearData}>
        Log out
      </button>
      <h4>Account: {emailCookie}</h4>
      <p>
        <strong>Your Key:</strong>
      </p>
      <div className="copy">
        <p id="key">{apiKeyCookie}</p>
        <button className="docs-btn" onClick={clipboard}>
          Copy
        </button>
      </div>
      <button className="docs-btn" onClick={getNewKey}>
        Generate New Key
      </button>
    </div>
  );
}

export default User;
