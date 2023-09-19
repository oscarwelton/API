import Navbar from "./components/navbar";
import Banner from "./components/banner";
import dataSvg from "./resources/data.svg";
import cogsSvg from "./resources/cogs.svg";
import jsonSvg from "./resources/json.svg";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Banner />
        <div className="form">
          <form action="">
            <input type="email" placeholder="Email"></input>
            <button type="submit">Submit</button>
          </form>
        </div>
        <p>
          *Sign up with a valid email address to receive your <span>free</span>
          API key
        </p>

        <div className="features">
          <div className="feature">
            <img src={dataSvg} alt="data" />
            <div className="feature-text">
              <h4>Rich and Reliable data</h4>
              <p>
                Elevate your application with dependable data for over 40,000
                English words.
              </p>
            </div>
          </div>
          <div className="feature">
            <img src={cogsSvg} alt="cogs" />
            <div className="feature-text">
              <h4>Fast and simple integration</h4>
              <p>
                Effortlessly embed our API with simple HTTP requests for swift
                and intuitive access to rich language resources.
              </p>
            </div>
          </div>
          <div className="feature">
            <img src={jsonSvg} alt="json" />
            <div className="feature-text">
              <h4>Standardised JSON response</h4>
              <p>
                Receive data in a standard format for consistent, seamless
                implementation.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
