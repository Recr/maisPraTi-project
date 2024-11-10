// Medicines.jsx
import {React, useState} from 'react';
import classes from './Medicines.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

//Lista de medicamentos
const Medicines = ({ records }) => {
  return (
    <div className={classes.records}>
      {records.length === 0 ? (
        <p className={classes.noRecordsMessage}>Nenhum medicamento encontrado</p>
      ) : (
        records.map((record) => (
          <div key={record.id} className={classes.recordItem}>
            <div className={classes.recordTitle}>
              <div><p>{record.name}</p></div>
              <div className={classes.editIcon}>
                <button className={classes.recordButton}>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </button>
              </div>
              <div className={classes.excludeIcon}>
                <button className={classes.recordButton}>
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
            </div>
            <div className={classes.recordDetails}>
              <div className={classes.recordDetailsLeft}>
                <p>Intensidade: {record.intensity} {record.intensityUnit}</p>
                <p>Frequência: {record.frequency} {record.frequencyUnit}</p>
              </div>
              <div className={classes.recordDetailsRight}>
                <p>Data de início: {record.startDate}</p>
                {record.endDate && <p>Data de fim: {record.endDate}</p>}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

//Module para adicionar medicamento
export const MedicinesMod = ({ onAddRecord }) => {
  const [formData, setFormData] = useState({
    name: '',
    frequency: '',
    frequencyUnit: '',
    intensity: '',
    intensityUnit: '',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddRecord(formData);
    setFormData({
      name: '',
      frequency: '',
      frequencyUnit: '',
      intensity: '',
      intensityUnit: '',
      startDate: '',
      endDate: '',
    });
  };

  return (
    <div className={classes.formContainer}>
      <h2 className={classes.title}>Adicionar medicamento</h2>
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

        <button type="submit" className={classes.submitButton}>Registrar</button>
      </form>
    </div>
  );
};
