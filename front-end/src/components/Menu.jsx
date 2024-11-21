// Falta ajustar os links

import classes from "./Menu.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStethoscope, faCapsules, faSyringe, faHeartPulse, faWeightScale, faCalendar } from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  return (
    <div className={classes.menuContainer}>
      <h2>Meus Dados de Saúde</h2>
      <ul>
        <li><Link className="header--link" to="/symptoms"><FontAwesomeIcon className={classes.icon} icon={faStethoscope} /> Sintomas</Link></li>
        <li><Link className="header--link" to="/medicines"><FontAwesomeIcon className={classes.icon} icon={faCapsules} /> Medicamentos</Link></li>
        <li><Link className="header--link" to="/vaccines"><FontAwesomeIcon className={classes.icon} icon={faSyringe} /> Vacinas</Link></li>
        <li><Link className="header--link" to="/bloodPressure"><FontAwesomeIcon className={classes.icon} icon={faHeartPulse} /> Pressão arterial</Link></li>
        <li><Link className="header--link" to="/weight"><FontAwesomeIcon className={classes.icon} icon={faWeightScale} /> Peso</Link></li>
        <li><Link className="header--link" to="/appointments"><FontAwesomeIcon className={classes.icon} icon={faCalendar} /> Consultas</Link></li>
      </ul>
    </div>
  );
};

export default Menu;