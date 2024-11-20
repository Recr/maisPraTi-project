import { React, useState } from 'react';
import classes from './Vaccines.module.css';
import axios from 'axios';

//Module para adicionar medicamento
const VaccinesAdd = ({ onAddRecord }) => {
    const [formData, setFormData] = useState({
      name: '',
      description:'',
      frequencyValue: '',
      frequencyUnit: '',
      applicationDate: '',
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
              const response = await axios.post('http://localhost:8080/user/vaccine', newRecord, {
                  headers: {
                      Authorization: `Bearer ${localStorage.getItem('token')}`,
                  },
              })
              console.log('Vacina registrada:', response.data);              
          } catch(error){
              console.error('Erro ao registrar vacina:', error)
          }
          try{
            const fullResponse = await axios.get('http://localhost:8080/user/vaccine',{
              headers: {
                  Authorization: `Bearer ${localStorage.getItem('token')}`,
              },
          })
            console.log('Registros atualizados:', fullResponse.data);            
          }catch(error){
            console.error('Erro ao recuperar registros:', error)
          }
         
      } 
      addRecords(newRecord);
      onAddRecord(newRecord); 
      
      setFormData({
        name: '',
        description:'',
        frequencyValue: '',
        frequencyUnit: '',
        applicationDate: '',
      });
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
                <option value="HOURS">Horas(s)</option>
                <option value="DAYS">Dia(s)</option>
                <option value="WEEKS">Semana(s)</option>
                <option value="MONTHS">Mes(es)</option>
                <option value="SPORADICALLY">Esporádico</option>
              </select>
            </div>
          </div>
            
          <div className={classes.formGroup}>
            <label>Data de aplicação*</label>
            <input
              type="date"
              id="applicationDate"
              name="applicationDate"
              value={formData.applicationDate}
              onChange={handleChange}
              required
            />
          </div>
            
          <button type="submit" className={classes.submitButton}>Registrar</button>
        </form>
      </div>
    );
  };

  export default VaccinesAdd;
  
