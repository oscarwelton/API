import { React, useState, useEffect } from "react";
import { redirect } from "react-router-dom";

function Documentation() {
  const [email, setEmail] = useState("");
  const [apiKey, setApiKey] = useState("");

  useEffect(() => {
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
    };

    const emailCookie = getCookie("email");
    const apiKeyCookie = getCookie("apiKey");

    setEmail(emailCookie);
    setApiKey(apiKeyCookie);
  }, []);

  return (
    <>
      <div className="documentation">
        <h3>Documentation</h3>
        <ul className="links">
          <li>
            <a href="#introduction">Introduction</a>
          </li>
          <li>
            <a href="#getting-started">Getting Started</a>
          </li>
          <li>
            <a href="#examples">Examples</a>
          </li>
          <li>
            <a href="#error-handling">Error Handling</a>
          </li>
          <li>
            <a href="#rate-limiting">Rate Limiting</a>
          </li>
          <li>
            <a href="#endpoints">Endpoints</a>
          </li>
        </ul>

        <div className="section">
          <h4>Introduction</h4>
          <p>
            WordWeb API is a simple HTTP REST API for searching and retreiving
            data on english words. The API was built using the MERN stack and
            provides a simple interface for searching for words and retreiving.
          </p>
          <p>
            The database is sourced from the Princeton Univserity{" "}
            <a href="https://wordnet.princeton.edu/" target="_blank">
              WordNet project
            </a>
            , which is a large lexical database of English. The WordNet project
            is a combination of different databases and is used by many popular
            applications and generative language models to date.
          </p>
          <p>
            Whilst the official WordNet database comprises of over 150,000 words
            and 115,000 synsets, this API uses a refined subset of the database.
            Our database contains over 40,000 words and their corresponding
            synsets.
          </p>

          <p>
            The WordWeb API was created as a personal project to learn more
            about REST APIs and to practice building a full stack application.
            On this basis, the API is not intended to be used in production. I
            recommend using using this API for personal projects and learning
            purposes only. However, the API is open source and the source code
            can be found on my GitHub:
          </p>
          <button
            onClick={() => redirect("https://github.com/oscarwelton/API")}
          >
            WordWeb Repo
          </button>
          <p>
            I hope you find this API useful and if you have any questions,
            please feel free to get in touch.
          </p>
        </div>

        <div className="section">
          <h4>Getting Started</h4>

          <p>
            To get started, all users must register for an API key. This is a
            simple process and can be done by joining the mailing list. Once you
            have registered, you will be sent an API key to your email address.
          </p>

          <p>
            The API key is used to authenticate requests to the API. The API key
            must be included in the request header as follows:
          </p>
        </div>

        <div className="section">
          <h4>Examples</h4>
        </div>

        <div className="section">
          <h4>Error Handling</h4>
        </div>

        <div className="section">
          <h4>Rate Limiting</h4>
        </div>

        <div className="section">
          <h4>Endpoints</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat at
            iste autem, earum quam ab ipsum velit. Quisquam, labore consequuntur
            iusto dolores optio et, molestiae officia ad, perferendis voluptatem
            laudantium.
          </p>
        </div>

        <div className="section">
          <h4>Contributing</h4>
        </div>

        <div className="section">
          <h4>License</h4>
        </div>
      </div>
    </>
  );
}

export default Documentation;
