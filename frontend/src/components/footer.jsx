import spiderSvg from '../resources/spider.svg'
import Form from './form'

function Footer() {
  return (
    <div className="footer">
      <div className="footer-header">
        <img src={spiderSvg} alt="" />
        <h2>WordWeb API</h2>
      </div>
        <Form />
        <a href="#">Documentation</a>
        <a href="#">Pricing</a>

        <ul className="social-links">
          <li><a href="#">GitHub</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">LinkedIn</a></li>
          <li><a href="#">Facebook</a></li>
        </ul>
    </div>

  )
}

export default Footer
