import { React } from 'react';
import axios from 'axios';

import classes from './Appointments.module.css';

//Module para editar registro
export const AppointmentsDelete = ({ currentRecord, deleteRecord, onClose}) => {
    
    const handleDelete = async () => {
        
            try{
                const response = await axios.delete(`http://localhost:8080/user/appointment/${currentRecord.id}`,{
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                })
                console.log(`Registro de consulta de id ${currentRecord.id} excluído: `, response.data)
                 // Chama a função `deleteRecord` para atualizar os registros na UI
                deleteRecord(currentRecord);
            } catch(error){
                console.error('Erro excluir registros de consulta: ', error)
            }
        }
    
    return (
      <div className={classes.deleteContainer}>
        <h2 className={classes.title}>Excluir registro de consulta</h2>
        <p className={classes.deleteMsg}>Deseja continuar e remover o registro?</p>
        <div className={classes.deleteButtons}>
            <button className={classes.submitButton} type="submit" onClick={()=>handleDelete()}>Sim</button>
            <button className={classes.submitButton} type="close" onClick={onClose}>Voltar</button>
        </div>
      </div>
    );
  };
  
export default AppointmentsDelete;  