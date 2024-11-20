import Logo from "../assets/logo.png";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={classes.footer}>
        <div className={classes.footerIcons}>
          <img src={Logo} alt="Health Card" />
        </div>
        <div className={classes.contentInfo}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">Sobre</a></li>
            <li><a href="/contact">Contato</a></li>
            <li><a href="faq">FAQ</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="register">Cadastre-se</a></li>
          </ul>
          <p className={classes.copyrightText}>
            Copyright © 2024 Salutia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
