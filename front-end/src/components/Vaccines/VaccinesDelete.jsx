import { React, useState, useEffect } from 'react';
import axios from 'axios';

import classes from './Vaccines.module.css';

//Module para editar registro de peso
export const VaccinesDelete = ({ currentRecord, deleteRecord }) => {
    
    const handleSubmit = async () => {
        
            try{
                const response = await axios.delete(`http://localhost:8080/user/vaccine/${currentRecord.id}`,{
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                })
                console.log(`Registro de vacina de id ${currentRecord.id} excluído: `, response.data)
                 // Chama a função `deleteRecord` para atualizar os registros na UI
                deleteRecord(currentRecord);
            } catch(error){
                console.error('Erro excluir registro de vacina: ', error)
                deleteRecord(currentRecord)
            }
        }
    
    const closeDialog = () =>{
        console.log("Voltando")
    }
    
    return (
      <div className={classes.deleteContainer}>
        <h2 className={classes.title}>Excluir registro de vacina</h2>
        <p className={classes.deleteMsg}>Deseja continuar e remover o registro?</p>
        <div className={classes.deleteButtons}>
            <button className={classes.submitButton} type="submit" onClick={()=>handleSubmit()}>Sim</button>
            <button className={classes.submitButton} type="close" onClick={()=>closeDialog()}>Voltar</button>
        </div>
      </div>
    );
  };
  
export default VaccinesDelete;  
