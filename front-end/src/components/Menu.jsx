// Falta ajustar os links

import React from "react";
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
        <li><a href="#">Pressão arterial</a></li>
        <li><Link className="header--link" to="/weight">Peso</Link></li>
        <li><a href="#">Consultas</a></li>
      </ul>
      <h3>Calendário</h3>
      <h3>Resumo</h3>

    </div>
  );
};

export default Menu;