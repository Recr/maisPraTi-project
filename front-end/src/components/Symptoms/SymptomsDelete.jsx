import { React, useState, useEffect } from 'react';
import axios from 'axios';

import classes from './Symptoms.module.css';


const SymptomsDelete = ({ currentRecord, deleteRecord, onClose }) =>{
     
    const handleDelete = async () => {
        
        try{
            const response = await axios.delete(`http://localhost:8080/user/symptom/${currentRecord.id}`,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
            console.log(`Registro de sintoma de id ${currentRecord.id} excluído: `, response.data)
             // Chama a função `deleteRecord` para atualizar os registros na UI
            deleteRecord(response.data);
            onClose(); // Fecha o diálogo após excluir
        } catch(error){
            console.error('Erro excluir registro de sintoma: ', error)
        }
    }

return (
  <div className={classes.deleteContainer}>
    <h2 className={classes.title}>Excluir registro de sintoma</h2>
    <p className={classes.deleteMsg}>Deseja continuar e remover o registro?</p>
    <div className={classes.deleteButtons}>
        <button className={classes.submitButton} type="submit" onClick={()=>handleDelete()}>Sim</button>
        <button className={classes.submitButton} type="close" onClick={onClose}>Voltar</button>
    </div>
  </div>
);
};



export default SymptomsDelete;