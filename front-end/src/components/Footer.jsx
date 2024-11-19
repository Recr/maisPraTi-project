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
            <li><a href="/">Home</a></li>
            <li><a href="/about">Sobre</a></li>
            <li><a href="/contact">Contato</a></li>
            <li><a href="faq">FAQ</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="register">Cadastre-se</a></li>
          </ul>
          <p className="copyright-text">
            Copyright © 2024 Salutia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
