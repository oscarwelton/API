import React, { useState, useEffect } from "react";
import axios from "axios";
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
    }
  }, []);

  return (
    <div className="user">
      {showForm ? (
        <Form />
      ) : (
        <div className="message">
          <h4>Look like you've already signed up!</h4>
          <p>Check your email for your API key.</p>
        </div>
      )}
    </div>
  );
}

export default User;
