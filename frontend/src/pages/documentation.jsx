import { React } from "react";
import { redirect } from "react-router-dom";
import User from "../components/user";
import CodeExample from "../components/code";

function Documentation() {
  return (
    <>
      <User />
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
            <a href="#endpoints">Endpoints</a>
          </li>
          <li>
            <a href="#response">Repsonse Data</a>
          </li>
          <li>
            <a href="#rate-limiting">Authentication & Rate Limiting</a>
          </li>
          <li>
            <a href="#error-handling">Error Handling</a>
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
            className="docs-btn"
            onClick={() => redirect("https://github.com/oscarwelton/API")}
          >
            WordWeb GitHub
          </button>
        </div>

        <div className="section">
          <h4>Getting Started</h4>
          <p>
            To get started, all users must register for an API key. This is a
            simple process. Register with a valid email address and once you
            have confirmed your email, your API key will be viewable in the
            browser.
          </p>
          <p>
            The API key is used to authenticate requests and must be included in
            the request header. See examples below for more details.
          </p>
          <CodeExample />

          <div className="section">
            <h4>Endpoints</h4>
            <p>
              WordWeb API is a simple HTTP REST API for searching and retreiving
              word data. The current version supports just the one endpoint to
              keep things simple.
            </p>
            <table>
              <tr>
                <td>Endpoint:</td>
                <td>/api/wordweb/</td>
              </tr>
              <tr>
                <td>Description:</td>
                <td>Retrieves information about a specific word</td>
              </tr>
              <tr>
                <td>Method:</td>
                <td>GET</td>
              </tr>
              <tr>
                <td>Parameters:</td>
                <td>API Key, Word</td>
              </tr>
            </table>
          </div>

          <div className="section">
            <h4>Response Data</h4>
            <p>
              Valid words return the following data. Due to to the nature of the
              database, some words may not return all the data fields.
            </p>

            <table>
              <tr>
                <th>Category</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>Word</td>
                <td>The word being searched.</td>
              </tr>
              <tr>
                <td>Length</td>
                <td>The character count of the word.</td>
              </tr>
              <tr>
                <td>Part of Speech</td>
                <td>Category of word (noun, verb, adjective, adverb).</td>
              </tr>
              <tr>
                <td>Definitions</td>
                <td>A definition of the word.</td>
              </tr>
              <tr>
                <td>Examples</td>
                <td>An example of the word in context.</td>
              </tr>
              <tr>
                <td>Synonyms</td>
                <td>
                  An array of words or phrases that means exactly or nearly the
                  same as the word.
                </td>
              </tr>
              <tr>
                <td>Antonyms</td>
                <td>
                  An array of words or phrases that mean the opposite of the
                  word.
                </td>
              </tr>
              <tr>
                <td>Hypernyms</td>
                <td>An array of categories for which the word belongs.</td>
              </tr>
              <tr>
                <td>Hyponyms</td>
                <td>
                  An array of specific words for which the word could be
                  considered the category.
                </td>
              </tr>
            </table>
          </div>
          <div className="section">
            <h4>Rate Limiting</h4>
            <p>
              By default, all API Keys are rate-limited to a maximum of 10
              requests per minute. This API is not intended for production use
              and therefore the rate limit is low.
            </p>
          </div>

          <div className="section">
            <h4>Error Handling</h4>
            <table>
              <tr>
                <th>Error Code</th>
                <th>Error Message</th>
              </tr>
              <tr>
                <td>400</td>
                <td>Bad Request</td>
              </tr>
              <tr>
                <td>401</td>
                <td>Unauthorized</td>
              </tr>
              <tr>
                <td>404</td>
                <td>Not Found</td>
              </tr>
              <tr>
                <td>429</td>
                <td>Too Many Requests</td>
              </tr>
              <tr>
                <td>500</td>
                <td>Internal Server Error</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Documentation;
