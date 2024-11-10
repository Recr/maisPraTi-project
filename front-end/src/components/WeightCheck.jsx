
import {React, useState} from 'react';
import classes from './WeightCheck.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

//Lista de registros de peso
export const WeightCheck = ({ records }) => {
  return (
    <div className={classes.records}>
       {records.length === 0 ? (
        <p className={classes.noRecordsMessage}>Nenhum registro encontrado</p>
          ) : (
          records.map((record) => (
            <div key={record.id} className={classes.recordItem}>
              <div className={classes.recordTitle}>
                <div><p>Peso #{record.id}</p></div>
                <div className={classes.editIcon}><button className={classes.recordButton}><FontAwesomeIcon icon={faPenToSquare} /></button></div>
                <div className={classes.excludeIcon}> <button className={classes.recordButton}><FontAwesomeIcon icon={faXmark} /></button> </div>
              </div>
              <div className={classes.recordDetails}>
                  <p>Peso: {record.weight} kg</p>
                  <p>Data: {record.date}</p>
              </div>
            </div>
          ))
        )
       }
    </div>
  );
};

//Module para adicionar registro de peso
export const WeightMod = ({ onAddRecord, records }) => {
  const [formData, setFormData] = useState({
    id: '',
    user: '',
    weight: '',
    date: '',
    createdAt: '',
    updatedAt: '',
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
        id: '',
        user: '',
        weight: '',
        date: '',
        createdAt: '',
        updatedAt: '',
    });
  };

 const generateId = (records) => {
    if (records.length === 0) return 1; // Se não tiver registro, começa em 1
    const lastRecord = records[records.length - 1];
    return lastRecord.id + 1; // Adiciona +1 ao último ID registrado
  };

  return (
    <div className={classes.formContainer}>
      <h2 className={classes.title}>Adicionar registro de peso</h2>
      <form onSubmit={handleSubmit}>
        <div className={classes.formGroup}>
          <label>Peso (kg)</label>
          <input
            type="text"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            required
          />
        </div>

        <div className={classes.formGroup}>
          <label>Data:*</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </div>
      

        <button type="submit" className={classes.submitButton}>Registrar</button>
      </form>
    </div>
  );
};


