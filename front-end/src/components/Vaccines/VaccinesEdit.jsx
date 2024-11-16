import { React, useState, useEffect } from 'react';
import axios from 'axios';
import classes from './Vaccines.module.css';

//Module para editar medicamento

const VaccinesEdit = ({ currentRecord }) => {
    const [formData, setFormData] = useState({
      name: '',
      description:'',
      frequencyValue: '',
      frequencyUnit: '',
      applicationDate: '',
    });
  
    useEffect(() => {
      const recoverRecord = async () => {
        try{
            const response = await axios.get(`http://localhost:8080/user/vaccine/${currentRecord.id}`,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
            console.log('Registro de vacina de id {id}: ', response.data)
            setFormData(response.data);
        } catch(error){
            console.error('Erro ao buscar registros de vacina:', error)
            setFormData({})
        }
    }
    if (currentRecord?.id) {
        recoverRecord();
      }
},[])

  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
    
  
    const handleSubmit = () => {
      const newData = {... formData};
      const editRecord = async () => {
          try{
              const response = await axios.put(`http://localhost:8080/user/vaccine/${currentRecord.id}`, newData, {
                  headers: {
                      Authorization: `Bearer ${localStorage.getItem('token')}`,
                  },
              })
              console.log('Registro de vacina alterado: ', response.data)
          } catch(error){
              console.error('Erro ao alterar registro de vacina: ', error)
          }
      }
  
      editRecord(newData);
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
                required
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
            <label>Data de aplicação</label>
            <input
              type="date"
              id="startDate"
              name="applicationDate"
              value={formData.applicationDate}
              onChange={handleChange}
              required
            />
          </div>
          
          <button type="submit" className={classes.submitButton}>Salvar alterações</button>
        </form>
      </div>
    );
  };
  
  export default VaccinesEdit;