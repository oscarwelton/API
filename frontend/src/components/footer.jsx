import spiderSvg from "../resources/spider.svg";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const navigateToRoot = () => {
    navigate('/');
  };

  const navigateToDocs = () => {
    navigate('/documentation');
  }

  return (
    <>
      <div className="footer">
        <div className="footer-header" onClick={navigateToRoot}>
          <img src={spiderSvg} alt="wordweb logo" />
          <h2>WordWeb</h2>
        </div>

        <ul className="links">
          <li onClick={navigateToDocs}>
            Documentation
          </li>
          <li>
            <a href="https://github.com/oscarwelton" target="_blank" rel="noreferrer">Repository</a>
          </li>
          <li>
            <a href="mailto:oscarwelton@gmail.com">Report Issue</a>
          </li>
        </ul>

        <ul className="links">
          <li>
            <a href="https://github.com/oscarwelton" target="_blank" rel="noreferrer">GitHub</a>
          </li>
          <li>
            <a href="https://linkedin.com/in/oscar-welton" target="_blank" rel="noreferrer">LinkedIn</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
