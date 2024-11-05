import Logo from "../assets/logo.png";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer--icons">
          <img src={Logo} alt="Health Card" />
        </div>
        <div className="content--info">
          <ul>
            <li>Heading Label</li>
            <li>Text Link</li>
            <li>Text Link</li>
            <li>Text Link</li>
            <li>Text Link</li>
            <li>Text Link</li>
            <li>Text Link</li>
            <li>Text Link</li>
            <li>Text Link</li>
            <li>Text Link</li>
          </ul>
          <p className="copyright-text">
            Copyright © 2024 My Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
