//
import { React, useState, useEffect } from 'react';
import classes from './Vaccines.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Modal from '../Modal';
import VaccinesEdit from './VaccinesEdit';

//Lista de medicamentos
const Vaccines = ({ records }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [currentRecord, setCurrentRecord] = useState(null);

  const openModal = (record) => {
    setCurrentRecord(record);
    setIsModalOpen(true);
  }
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentRecord(null);
  }

  const handleSave = (updatedRecord) => {
    const updatedRecords = records.map(record =>
      record.id === updatedRecord.id ? updatedRecord : record
    );
    setRecords(updatedRecords);  // Supondo que use um estado `records`
    closeModal(); // Fecha o modal após salvar
  };

  const handleDelete = (id) => {
    console.log("Delete " + id);
  }

  return (
    <div className={classes.records}>
      {records.length === 0 ? (
        <p className={classes.noRecordsMessage}>Nenhuma vacina encontrado</p>
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
                <button className={classes.recordButton} onClick={()=>handleDelete(record.id)}>
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
              {currentRecord && <VaccinesEdit currentRecord={currentRecord} onSave={handleSave}/>}
            </Modal>
          </div>
        ))
      )}
    </div>
  );
};


export default Vaccines;