import spiderSvg from "../resources/spider.svg";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const navigateToRoot = () => {
    navigate('/');
  };

  const navigateToDocs = () => {
    navigate('/documentation');
  }

  return (
    <div className="nav">
      <div className="logo-div" onClick={navigateToRoot}>
        <img src={spiderSvg} alt="wordweb logo" />
        <h2>WordWeb</h2>
      </div>
      <button className="docs-btn" onClick={navigateToDocs}>
        Documentation
      </button>
    </div>
  );
}

export default Navbar;
