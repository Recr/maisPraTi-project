
import {React, useState} from 'react';
import axios from 'axios';
import classes from './Symptoms.module.css'


//Module para adicionar registro de sintoma
const SymptomsAdd = ({onAddRecord}) =>{
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        intensity: '',
        registerDate: '', 
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
                const response = await axios.post('http://localhost:8080/user/symptom', newRecord, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                })
                console.log('Sintoma registrado: ', response.data)
            } catch(error){
                console.error('Erro ao registrar sintoma:', error)
            }
        }

        addRecords(newRecord);
        onAddRecord(newRecord);     
        setFormData({
            name: '',
            description: '',
            intensity: '',
            registerDate: '', 
        });
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
              value={formData.name}
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
              <option value="">Intensidade</option>
              <option value="BARELY_NOTICEABLE">Quase imperceptível</option>
              <option value="MILD_DISCOMFORT">Leve desconforto</option>
              <option value="MODERATE_INTENSITY">Intensidade moderada</option>
              <option value="SEVERE_PAIN">Dor severa</option>
              <option value="UNBEARABLE">Insuportável</option>
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
            />
          </div>
          <div className={classes.formGroup}>
            <label>Data*</label>
            <input
                type="datetime-local"
                id="registerDate"
                name="registerDate"
                value={formData.registerDate}
                onChange={handleChange}
                required
            />
            </div>
  
          <button type="submit" className={classes.submitButton}>Registrar</button>
        </form>
      </div>
    );
  };



export default SymptomsAdd;