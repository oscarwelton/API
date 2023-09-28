import spiderSvg from "../resources/spider.svg";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-header">
          <img src={spiderSvg} alt="" />
          <h2>WordWeb API</h2>
        </div>

        <ul className="links">
          <li>
            <a href="#">Documentation</a>
          </li>
          <li>
            <a href="#">Repository</a>
          </li>
          <li>
            <a href="mailto:oscarwelton@gmail.com">Report Issue</a>
          </li>
        </ul>

        <ul className="links">
          <li>
            <a href="#">GitHub</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">LinkedIn</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
