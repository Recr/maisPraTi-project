// Medicines.jsx
import {React, useState} from 'react';
import styles from './Medicines.module.css';

const Medicines = ({ records }) => {
  return (
    <div className={styles.records}>
      <h2 className={styles.title}>Registros</h2>
      {records.map((record) => (
        <div key={record.id} className={styles.recordItem}>
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
