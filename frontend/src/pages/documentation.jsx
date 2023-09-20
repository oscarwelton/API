import React from "react";

function Documentation() {
  return (
    <div class="documentation">
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
          WordNet API is a simple HTTP REST API for searching and retreiving
          data on english words.
        </p>
        <p>
          The database is sourced from the Princeton Univserity {" "}
          <a href="https://wordnet.princeton.edu/" target="_blank">
            WordNet project
          </a>, which is a large lexical database of English. The WordNet project
          is a combination of different databases and is used by many popular
          applications and generative language models.
        </p>
        <p>Whilst the official WordNet database comprises of over 150,000 words
          and 115,000 synsets, this API only contains a subset of the database.
          The API contains over 40,000 words and their corresponding synsets.
        </p>
      </div>

      <div className="section">
        <h4>Getting Started</h4>
      </div>

      <div className="section">
        <h4>Examples</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat at
          iste autem, earum quam ab ipsum velit. Quisquam, labore consequuntur
          iusto dolores optio et, molestiae officia ad, perferendis voluptatem
          laudantium.
        </p>
      </div>

      <div className="section">
        <h4>Error Handling</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat at
          iste autem, earum quam ab ipsum velit. Quisquam, labore consequuntur
          iusto dolores optio et, molestiae officia ad, perferendis voluptatem
          laudantium.
        </p>
      </div>

      <div className="section">
        <h4>Rate Limiting</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat at
          iste autem, earum quam ab ipsum velit. Quisquam, labore consequuntur
          iusto dolores optio et, molestiae officia ad, perferendis voluptatem
          laudantium.
        </p>
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
    </div>
  );
}

export default Documentation;
