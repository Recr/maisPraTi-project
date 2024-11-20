import Logo from "../assets/logo.png";
import classes from "./Footer.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer>
      <div className={classes.footer}>
        <div className={classes.footerIcons}>
          <img src={Logo} alt="Health Card" />
        </div>
        <div className={classes.contentInfo}>
          <div className={classes.contentDiv}>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">Sobre</a></li>
              <li><a href="/contact">Contato</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>
          <div className={classes.contentDiv}>
            <ul>
              <li><a href="/login">Login</a></li>
              <li><a href="/register">Cadastre-se</a></li>
            </ul>
            <div className={classes.contactIconsDiv}>
              <a href="#" className={classes.contactIcon}><FontAwesomeIcon icon={faWhatsapp} style={{color: "#1C4650",}} size="xl" /></a>
              <a href="#" className={classes.contactIcon}><FontAwesomeIcon icon={faTelegram} style={{color: "#1C4650",}} size="xl" /> </a>
              <a href="#" className={classes.contactIcon}><FontAwesomeIcon icon={faInstagram} style={{color: "#1C4650",}} size="xl" /> </a>
              <a href="#" className={classes.contactIcon}><FontAwesomeIcon icon={faXTwitter} style={{color: "#1C4650",}} size="xl" /> </a>
            </div>
          </div>

          <p className={classes.copyrightText}>
            Copyright © 2024 Salutia. Todos os direitos reservados.
          </p>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
