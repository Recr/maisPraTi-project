import "./Header.css";
import Logo from "../assets/logo.png";

function Header() {
  return (
    <header>
      <div className="header--logo">
        <a href="/">
          <img src={Logo} alt="Health Card" />
        </a>
      </div>
      <div className="div--buttons">
        <button>Sobre</button>
        <button>Contato</button>
        <button>FAQ</button>
        <button id="button--login">Login</button>
        <button id="button--signup">Cadastre-se</button>
      </div>
    </header>
  );
}
export default Header;
