// 20/10 Ayumi: falta direcionar corretamente os Links
import classes from "./Header.module.css";
import Logo from "../assets/logo-1.png";

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
          <li><Link className={classes.headerLink} to="/profile">Meu Perfil</Link></li>
          <li><Link className={classes.headerLink} to="#">Meu Calendário</Link></li>
          <li><button id={classes.buttonPurple}><Link className={classes.headerLink} to="/login">Avisos</Link></button></li>
          <li><button id={classes.buttonGreen}><Link className={classes.headerLink} to="/register">Configurações</Link></button></li>
          <li><button id={classes.buttonLogout} type='submit' onClick={()=>handleSubmit()}><span data-tooltip="Sair"><FontAwesomeIcon icon={faArrowRightFromBracket} /></span></button></li>
        </ul>
               
      </div>
    </header>
  );
}

export default HeaderIn;
