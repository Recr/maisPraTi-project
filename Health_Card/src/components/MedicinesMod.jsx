// MedicinesMod.jsx
import React, { useState } from 'react';
import styles from './Medicines.module.css';

const MedicinesMod = ({ onAddRecord }) => {
  const [formData, setFormData] = useState({
    name: '',
    frequency: '',
    intensity: '',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddRecord(formData);
    setFormData({
      name: '',
      frequency: '',
      intensity: '',
      startDate: '',
      endDate: '',
    });
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Adicionar registro</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nome*</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="frequency">Frequência*</label>
          <select
            id="frequency"
            name="frequency"
            value={formData.frequency}
            onChange={handleChange}
            required
          >
            <option value="">Intervalo</option>
            <option value="Diária">Diária</option>
            <option value="Semanal">Semanal</option>
            <option value="Mensal">Mensal</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="intensity">Intensidade*</label>
          <select
            id="intensity"
            name="intensity"
            value={formData.intensity}
            onChange={handleChange}
            required
          >
            <option value="">Unidade</option>
            <option value="mg">mg</option>
            <option value="ml">ml</option>
            <option value="g">g</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="startDate">Data de Início*</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="endDate">Data de Fim</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className={styles.submitButton}>Registrar</button>
      </form>
    </div>
  );
};

export default MedicinesMod;
