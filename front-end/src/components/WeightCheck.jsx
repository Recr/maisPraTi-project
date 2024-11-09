// Medicines.jsx
import {React, useState} from 'react';
import classes from './WeightCheck.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';


const WeightCheck = ({ records }) => {
  return (
    <div className={classes.records}>
      {records.map((record) => (
        <div key={record.id} className={classes.recordItem}>
          <div className={classes.recordTitle}>
            <div><p>Peso #{record.id}</p></div>
            <div className={classes.editIcon}><button className={classes.recordButton}><FontAwesomeIcon icon={faPenToSquare} /></button></div>
            <div className={classes.excludeIcon}> <button className={classes.recordButton}><FontAwesomeIcon icon={faXmark} /></button> </div>
          </div>
          <div className={classes.recordDetails}>
              <p>Peso: {record.weight} kg</p>
              <p>Data: {record.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeightCheck;
