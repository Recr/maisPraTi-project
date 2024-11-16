
import {React, useState} from 'react';
import axios from 'axios';

import classes from './WeightCheck.module.css';


//Module para adicionar registro de peso
export const WeightAdd = ({ onAddRecord, records }) => {
    const [formData, setFormData] = useState({
      weight: '',
      date: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();

    const newRecord = {... formData};

    const addRecords = async (newRecord) => {
        try{
            const response = await axios.post('http://localhost:8080/user/weight-check', newRecord, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
            console.log('Peso registrado: ', response.data)
            onAddRecord(response.data);
        } catch(error){
            console.error('Erro ao registrar peso:', error)
        }
    }
    addRecords(newRecord);
      setFormData({
          weight: '',
          date: '',
      });
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
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
        
  
          <button type="submit" className={classes.submitButton}>Registrar</button>
        </form>
      </div>
    );
  };
  
export default WeightAdd;  