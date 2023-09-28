import dataSvg from "../resources/data.svg";
import cogsSvg from "../resources/cogs.svg";
import jsonSvg from "../resources/json.svg";

function Features() {
  return (
    <div className="features">
      <div className="feature">
        <img src={dataSvg} alt="data" />
        <div className="feature-text">
          <h4>Rich and Reliable</h4>
          <p>
            Elevate your application with dependable data for over 40,000
            English words.
          </p>
        </div>
      </div>
      <div className="feature">
        <img src={cogsSvg} alt="cogs" />
        <div className="feature-text">
          <h4>Simple Integration</h4>
          <p>
            Effortlessly embed our API with simple HTTP requests for swift and
            intuitive access to rich language resources.
          </p>
        </div>
      </div>
      <div className="feature">
        <img src={jsonSvg} alt="json" />
        <div className="feature-text">
          <h4>Standardised Response</h4>
          <p>
            Receive data in JSON format by default for consistent, seamless
            implementation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
