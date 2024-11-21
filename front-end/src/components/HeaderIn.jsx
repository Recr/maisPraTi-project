// 20/10 Ayumi: falta direcionar corretamente os Links
import classes from "./Header.module.css";
import Logo from "../assets/logo.png";

import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const HeaderIn = () => {

  const navigate = useNavigate();

  const handleSubmit = () => {
    // Remove o token do localStorage
    localStorage.removeItem('token');
    // Redireciona para a página de login
    navigate('/login');
  };
  

  return (
    <header>
      <div className={classes.headerLogo}>
      <Link to="/user">
          <img src={Logo} alt="Health Card" />
          </Link>
      </div>
      <div className={classes.headerNav}>
        <ul className={classes.divButtons}>
          <li><button id={classes.buttonPurple}><Link className={classes.headerLink} to="/profile">Meu Perfil</Link></button></li>
          <li><button id={classes.buttonGreen} type='submit' onClick={()=>handleSubmit()}><Link className={classes.headerLink} to="/">Sair<FontAwesomeIcon className={classes.icon} icon={faArrowRightFromBracket} /></Link></button></li>
        </ul>
      </div>
    </header>
  );
}

export default HeaderIn;
