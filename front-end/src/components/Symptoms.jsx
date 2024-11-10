
import {React, useState} from 'react';
import classes from './Symptoms.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';


export const Symptoms = ({ records }) => {
  return (
    <div className={classes.records}>
       {records.length === 0 ? (
        <p className={classes.noRecordsMessage}>Nenhum registro encontrado</p>
          ) : (
          records.map((record) => (
            <div key={record.id} className={classes.recordItem}>
              <div className={classes.recordTitle}>
                <div><p>Sintoma #{record.id}</p></div>
                <div className={classes.editIcon}><button className={classes.recordButton}><FontAwesomeIcon icon={faPenToSquare} /></button></div>
                <div className={classes.excludeIcon}> <button className={classes.recordButton}><FontAwesomeIcon icon={faXmark} /></button> </div>
              </div>
              <div className={classes.recordDetails}>
                <div className={classes.recordDetailsLeft}>
                  <p>Nome: {record.name}</p>
                  <p>Intensidade: {record.intensity}</p>
                  <p>Data: {record.register_date}</p>
                </div>
                <div className={classes.recordDetailsRight}>
                  <p>Descrição: {record.description}</p>               
              </div>
              </div>
            </div>
          ))
        )
       }
    </div>
  );
};


export const SymptomsMod = ({ onAddRecord, records }) => {
    const [formData, setFormData] = useState({
        id: '',
        user_id: '',
        name: '',
        description: '',
        intensity: '',
        register_date: '',
        created_at:'',
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
        id: '',
        user_id: '',
        name: '',
        description: '',
        intensity: '',
        register_date: '',
        created_at:'',
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
        <h2 className={classes.title}>Adicionar registro de sintoma</h2>
        <form onSubmit={handleSubmit}>
          <div className={classes.formGroup}>
            <label>Nome*</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.weight}
              onChange={handleChange}
              required
            />
          </div>
  
          <div className={classes.formGroup}>
            <label>Intensidade*</label>
            <select
              id="intensity"
              name="intensity"
              value={formData.intensity}
              onChange={handleChange}
              required
            >
              <option value="">Intervalo</option>
              <option value="barely_noticeable">Quase imperceptível</option>
              <option value="mild_discomfort:">Leve desconforto</option>
              <option value="moderate_intensity">Intensidade moderada</option>
              <option value="severe_pain">Dor severa</option>
              <option value="unbearable">Insuportável</option>
            </select>
          </div>
          <div className={classes.formGroup}>
            <label>Descrição</label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className={classes.formGroup}>
            <label>Data*</label>
            <input
                type="date"
                id="register_date"
                name="register_date"
                value={formData.register_date}
                onChange={handleChange}
                required
            />
            </div>
  
          <button type="submit" className={classes.submitButton}>Registrar</button>
        </form>
      </div>
    );
  };
  
  export default SymptomsMod;
  