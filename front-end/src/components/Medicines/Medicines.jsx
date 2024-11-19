//
import { useState } from 'react';
import classes from './Medicines.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Modal from '../Modal';
import Dialog from '../Dialog';
import MedicinesEdit from './MedicinesEdit';
import MedicinesDelete from './MedicinesDelete';

//Lista de medicamentos
const Medicines = ({ records }) => {

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
  }

  const handleDelete = (id) => {
    closeDialog();
    console.log("Delete " + id);
  }

  return (
    <div className={classes.records}>
      {records.length === 0 ? (
        <p className={classes.noRecordsMessage}>Nenhum medicamento encontrado</p>
      ) : (
        records.map((record) => (
          <div key={record.id} className={classes.recordItem}>
            <div className={classes.recordTitle}>
              <div><p>{record.name}</p></div>
              <div className={classes.editIcon}>
                <button className={classes.recordButton} onClick={()=>openModal(record)}>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </button>
              </div>
              <div className={classes.excludeIcon}>
                <button className={classes.recordButton} onClick={()=>openDialog(record)}>
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
            </div>
            <div className={classes.recordDetails}>
              <div className={classes.recordDetailsLeft}>
                <p>Descrição: {record.description ? <span>{record.description}</span> : "-"}</p>
                </div>
            </div>
            <div className={classes.recordDetails}>
              <div className={classes.recordDetailsLeft}>
                <p>Intensidade: {record.doseValue ? <span>{record.doseValue} {record.doseUnit}</span> : "-"}</p>
                <p>Frequência: {record.frequencyValue ? <span>a cada {record.frequencyValue} {record.frequencyUnit}</span> : "-"}</p>
              </div>
              <div className={classes.recordDetailsRight}>
                <p>Data de início: {record.startDate}</p>
               <p>Data de fim: {record.endDate ? <span>{record.endDate}</span> : "-"}</p>
              </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              {currentRecord && <MedicinesEdit currentRecord={currentRecord} onSave={handleSave}/>}
            </Modal>
            <Dialog isOpen={isDialogOpen} onClose={closeDialog}>
              {currentRecord && <MedicinesDelete currentRecord={currentRecord} deleteRecord={handleDelete}/>}
            </Dialog>
          </div>
        ))
      )}
    </div>
  );
};


export default Medicines;