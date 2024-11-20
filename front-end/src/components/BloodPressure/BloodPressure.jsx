//Problemas: ao salvar edição, modal não fecha sozinho e página não atualiza sozinha.
import {React, useState} from 'react';
import Modal from '../Modal';
import Dialog from '../Dialog';
import BloodPressureEdit from './BloodPressureEdit';
import BloodPressureDelete from './BloodPressureDelete';
import classes from './BloodPressure.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

//Lista de registros
const BloodPressure = ({ records }) => {

  const [currentRecord, setCurrentRecord] = useState(null);
  
  //Configura Modal para editar registros
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = (record) => {
    setCurrentRecord(record);
    setIsModalOpen(true);
  }
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentRecord(null);
  }

  //Configura Dialog para deletar registros
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const openDialog = (record) => {
    setCurrentRecord(record);
    setIsDialogOpen(true);
  }
  const closeDialog = () => {
    setIsDialogOpen(false);
    setCurrentRecord(null);
  }

  const handleSave = (updatedRecord) => {
    closeModal();
    updatedRecord = records.map(record =>
      record.id === updatedRecord.id ? updatedRecord : record
    );
    // setRecords(updatedRecords);  // Supondo que use um estado `records`
 // Fecha o modal após salvar
  };

  const handleDelete = (id) => {
    closeDialog();
    console.log("Delete " + id);
  }

  return (
    <div className={classes.records}>

      {(!records || records.length === 0) ? (
              <p className={classes.noRecordsMessage}>Nenhum registro encontrado</p>
            ) : ( records.map((record) => (
                        <div key={record.id} className={classes.recordItem}>
                          <div className={classes.recordTitle}>
                            <div><p>Pressão Arterial #{record.id}</p></div>
                            <div className={classes.editIcon}><button className={classes.recordButton} onClick={()=>openModal(record)}><FontAwesomeIcon icon={faPenToSquare} /></button></div>
                            <div className={classes.excludeIcon}> <button className={classes.recordButton} onClick={()=>openDialog(record)}><FontAwesomeIcon icon={faXmark} /></button></div>
                          </div>
                          <div className={classes.recordDetails}>
                            <div className={classes.recordDetailsLeft}>
                                <p>Pressão sistólica: {record.systolicPressure}</p>
                                <p>Pressão diastólica: {record.diastolicPressure}</p>
                            </div>
                            <div className={classes.recordDetailsRight}>
                              <p>Batimentos cardíacos: {record.heartRate} bpm</p>
                              <p>Data: {record.checkTime}</p>
                            </div>
                              </div>

                              <Modal isOpen={isModalOpen} onClose={closeModal}>
                                {currentRecord && <BloodPressureEdit currentRecord={currentRecord} editRecord={handleSave}/>}
                              </Modal>

                              <Dialog isOpen={isDialogOpen} onClose={closeDialog}>
                                {currentRecord && <BloodPressureDelete currentRecord={currentRecord} deleteRecord={handleDelete} onClose={closeDialog}/>}
                              </Dialog>
                        </div>
                      ))
                )
        }

    </div>
  );
};

export default BloodPressure;


