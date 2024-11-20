// Falta ajustar os links

import classes from "./Menu.module.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className={classes.menuContainer}>
      <h2>Meus Dados de Saúde</h2>
      <ul>
        <li><Link className="header--link" to="/symptoms">Sintomas</Link></li>
        <li><Link className="header--link" to="/medicines">Medicamentos</Link></li>
        <li><Link className="header--link" to="/vaccines">Vacinas</Link></li>
        <li><Link className="header--link" to="/bloodPressure">Pressão arterial</Link></li>
        <li><Link className="header--link" to="/weight">Peso</Link></li>
        <li><Link className="header--link" to="/appointments">Consultas</Link></li>
        <li><Link className="header--link" to="/appointments">Resumo</Link></li>
      </ul>
    </div>
  );
};

export default Menu;