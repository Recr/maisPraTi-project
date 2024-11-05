// Medicines.jsx
import {React, useState} from 'react';
import classes from './Medicines.module.css';

const Medicines = ({ records }) => {
  return (
    <div className={classes.records}>
      <h2 className={classes.title}>Registros</h2>
      {records.map((record) => (
        <div key={record.id} className={classes.recordItem}>
          <p><strong>{record.name}</strong></p>
          <p>{record.dose}</p>
          <p>{record.frequency}</p>
          <p>{record.startDate}</p>
          {record.endDate && <p>{record.endDate}</p>}
        </div>
      ))}
    </div>
  );
};

export default Medicines;
