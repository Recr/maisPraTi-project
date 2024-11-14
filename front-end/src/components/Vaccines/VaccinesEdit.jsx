import { React, useState, useEffect } from 'react';
import classes from './Vaccines.module.css';

/*
MedicinesEdit >> não puxa frequencia (valor) e intensidade (valor e unidade)
Salvar alterações tbm não ta funcionando ainda
*/


//Module para editar medicamento

const VaccinesEdit = ({ currentRecord }) => {
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
  
    useEffect(() => {
      if (currentRecord) {
        setFormData({
          id: currentRecord.id || '',
          user: currentRecord.user || '',
          createdAt: currentRecord.createdAt || '',
          name: currentRecord.name || '',
          description: currentRecord.description || '',
          frequencyValue: currentRecord.frequencyValue || '',
          frequencyUnit: currentRecord.frequencyUnit || '',
          doseValue: currentRecord.doseValue || '',
          doseUnit: currentRecord.doseUnit || '',
          startDate: currentRecord.startDate || '',
          endDate: currentRecord.endDate || '',
          updatedAt: currentRecord.updatedAt || ''
        });
      }
    }, [currentRecord]);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSave(formData);
    };
  
    return (
      <div className={classes.formContainer}>
        <h2 className={classes.title}>Editar vacina</h2>
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
            <label>Frequência</label>
            <div className={classes.formLine}>
              <input
                type="text"
                id="frequency"
                name="frequency"
                value={formData.frequency}
                onChange={handleChange}
              />
              <select
                id="frequencyUnit"
                name="frequencyUnit"
                value={formData.frequencyUnit}
                onChange={handleChange}
                required
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
                id="intensity"
                name="intensity"
                value={formData.intensity}
                onChange={handleChange}
                required
              />
              <select
                id="intensityUnit"
                name="intensityUnit"
                value={formData.intensityUnit}
                onChange={handleChange}
                required
              >
                <option value="">Unidade</option>
                <option value="mcg">mcg</option>
                <option value="mg">mg</option>
                <option value="g">g</option>
                <option value="ml">ml</option>
                <option value="%">%</option>
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
  
          <button type="submit" className={classes.submitButton}>Salvar alterações</button>
        </form>
      </div>
    );
  };
  
  export default VaccinesEdit;