// 20/10 Ayumi: falta formatar o <Link>

import "./Header.css";
import Logo from "../assets/logo.png";
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="header--logo">
      <Link to="/">
          <img src={Logo} alt="Health Card" />
          </Link>
      </div>
      <div className="div--buttons">
        <button>Sobre</button>
        <button>Contato</button>
        <button>FAQ</button>
        <button id="button--login"><Link to="/login">Login</Link></button>
        <button id="button--signup"><Link to="/register">Cadastre-se</Link></button>
      </div>
    </header>
  );
}
export default Header;
