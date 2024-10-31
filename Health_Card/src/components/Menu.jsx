// Falta ajustar os links

import React from "react";
import classes from "./Menu.module.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className={classes.menuContainer}>
      <h2>Meus Dados de Saúde</h2>
      <ul>
        <li><a href="#">Sintomas</a></li>
        <li><Link className="header--link" to="/medicine">Medicamentos</Link></li>
        <li><a href="#">Vacinas</a></li>
        <li><a href="#">Consultas</a></li>
        <li><Link className="header--link" to="/weight">Peso</Link></li>
        <li><a href="#">Lorem ipsum dolor</a></li>
      </ul>
      <h3>Calendário</h3>
      <h3>Resumo</h3>

    </div>
  );
};

export default Menu;