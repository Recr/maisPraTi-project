import { React } from 'react';
import axios from 'axios';

import classes from './BloodPressure.module.css';

//Module para editar registro de pressão
export const BloodPressureDelete = ({ currentRecord, deleteRecord, onClose }) => {
    
    const handleDelete = async () => {
        
            try{
                const response = await axios.delete(`http://localhost:8080/user/bloodPressure/${currentRecord.id}`,{
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                })
                console.log(`Registro de pressão de id ${currentRecord.id} excluído: `, response.data)
                 // Chama a função `deleteRecord` para atualizar os registros na UI
                deleteRecord(currentRecord);
            } catch(error){
                console.error('Erro excluir registros de pressão: ', error)
            }
        }
    
    return (
      <div className={classes.deleteContainer}>
        <h2 className={classes.title}>Excluir medição de pressão</h2>
        <p className={classes.deleteMsg}>Deseja continuar e remover o registro?</p>
        <div className={classes.deleteButtons}>
            <button className={classes.submitButton} type="submit" onClick={()=>handleDelete()}>Sim</button>
            <button className={classes.submitButton} type="close" onClick={onClose}>Voltar</button>
        </div>
      </div>
    );
  };
  
export default BloodPressureDelete;  