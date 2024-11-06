// Medicines.jsx
import {React, useState} from 'react';
import classes from './Medicines.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';


const Medicines = ({ records }) => {
  return (
    <div className={classes.records}>
      {records.map((record) => (
        <div key={record.id} className={classes.recordItem}>
          <div className={classes.recordTitle}>
            <div><p>{record.name}</p></div>
            <div className={classes.editIcon}><button className={classes.recordButton}><FontAwesomeIcon icon={faPenToSquare} /></button></div>
            <div className={classes.excludeIcon}> <button className={classes.recordButton}><FontAwesomeIcon icon={faXmark} /></button> </div>
          </div>
          <div className={classes.recordDetails}>
            <div className={classes.recordDetailsLeft}>
              <p>Intensidade: {record.intensity} {record.intensityUnit}</p>
              <p>Frequência: {record.frequency} {record.frequencyUnit}</p>
            </div>
            <div className={classes.recordDetailsRight}>
              <p>Data de início: {record.startDate}</p>
              {record.endDate && <p>Data de fim: {record.endDate}</p>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Medicines;
