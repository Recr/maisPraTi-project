// 20/10 Ayumi: falta formatar o <Link>

import "./Header.css";
import Logo from "../assets/logo-1.png";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="header--logo">
      <Link to="/">
          <img src={Logo} alt="Health Card" />
          </Link>
      </div>
      <div className="header--nav">
        <ul className="div--buttons">
          <li><Link className="header--link" to="/about">Sobre</Link></li>
          <li><Link className="header--link" to="/contact">Contato</Link></li>
          <li><Link className="header--link" to="/faq">FAQ</Link></li>
          <li><button id="buttonPurple"><Link className="header--link" to="/login">Login</Link></button></li>
          <li><button id="buttonGreen"><Link className="header--link" to="/register">Cadastre-se</Link></button></li>
        </ul>
               
      </div>
    </header>
  );
}
export default Header;
