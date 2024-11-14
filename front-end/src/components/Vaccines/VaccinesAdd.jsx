import { React, useState, useEffect } from 'react';
import classes from './Vaccines.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Modal from '../Modal';

//Module para adicionar medicamento
const VaccinesAdd = ({ onAddRecord, records }) => {
    const [formData, setFormData] = useState({
      id:'',
      user:'',
      createdAt:'',
      name: '',
      description:'',
      frequencyValue: '',
      frequencyUnit: '',
      doseValue: '',
      doseUnit: '',
      startDate: '',
      endDate: '',
      updatedAt:''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newId = generateId(records);
      const newUser = 100;
      const now = Date.now();
      const newRecord = {... formData, id:newId, user: newUser, createdAd: now };
      onAddRecord(newRecord);
      setFormData({
        id:'',
        user:'',
        createdAt:'',
        name: '',
        description:'',
        frequencyValue: '',
        frequencyUnit: '',
        doseValue: '',
        doseUnit: '',
        startDate: '',
        endDate: '',
        updatedAt:''
      });
    };
  
    const generateId = (records) => {
      if (records.length === 0) return 1; // Se não tiver registro, começa em 1
      const lastRecord = records[records.length - 1];
      return lastRecord.id + 1; // Adiciona +1 ao último ID registrado
    };
  
    return (
      <div className={classes.formContainer}>
        <h2 className={classes.title}>Adicionar vacina</h2>
        <form onSubmit={handleSubmit}>
          <div className={classes.formGroup}>
            <label>Nome*</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={classes.formGroup}>
            <label>Descrição</label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div className={classes.formGroup}>
            <label>Frequência</label>
            <div className={classes.formLine}>
              <input
                type="text"
                id="frequencyValue"
                name="frequencyValue"
                value={formData.frequencyValue}
                onChange={handleChange}
              />
              <select
                id="frequencyUnit"
                name="frequencyUnit"
                value={formData.frequencyUnit}
                onChange={handleChange}
              >
                <option value="">Intervalo</option>
                <option value="hora(s)">Horas(s)</option>
                <option value="dia(s)">Dia(s)</option>
                <option value="semana(s)">Semana(s)</option>
                <option value="mês(es)">Mes(es)</option>
                <option value="esporádico">Esporádico</option>
              </select>
            </div>
          </div>
          <div className={classes.formGroup}>
            <label>Intensidade*</label>
            <div className={classes.formLine}>
              <input
                type="text"
                id="doseValue"
                name="doseValue"
                value={formData.doseValue}
                onChange={handleChange}
              />
              <select
                id="doseUnit"
                name="doseUnit"
                value={formData.doseUnit}
                onChange={handleChange}
              >
                <option value="">Unidade</option>
                <option value="MCG">mcg</option>
                <option value="MG">mg</option>
                <option value="G">g</option>
                <option value="ML">ml</option>
                <option value="UI">UI</option>
                <option value="PCT">%</option>
              </select>
            </div>
          </div>
  
          <div className={classes.formGroup}>
            <label>Data de Início*</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className={classes.formGroup}>
            <label>Data de Fim</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
            />
          </div>
  
          <button type="submit" className={classes.submitButton}>Registrar</button>
        </form>
      </div>
    );
  };

  export default VaccinesAdd;
  