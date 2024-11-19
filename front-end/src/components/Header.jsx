// 20/10 Ayumi: falta formatar o <Link>

import classes from "./Header.module.css";
import Logo from "../assets/logo.png";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className={classes.headerLogo}>
      <Link to="/">
          <img src={Logo} alt="Health Card" />
          </Link>
      </div>
      <div className={classes.headerNav}>
        <ul className={classes.divButtons}>
          <li><Link className={classes.headerLink} to="/about">Sobre</Link></li>
          <li><Link className={classes.headerLink} to="/contact">Contato</Link></li>
          <li><Link className={classes.headerLink} to="/faq">FAQ</Link></li>
          <li><button id={classes.buttonPurple}><Link className={classes.headerLink} to="/login">Login</Link></button></li>
          <li><button id={classes.buttonGreen}><Link className={classes.headerLink} to="/register">Cadastre-se</Link></button></li>
        </ul>
               
      </div>
    </header>
  );
}
export default Header;
