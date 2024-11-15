import React, { useState } from 'react';
import HeaderIn from "../components/HeaderIn";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Modal from "../components/Modal";
import Medicines from '../components/Medicines/Medicines';
import MedicinesAdd from '../components/Medicines/MedicinesAdd';
import axios from 'axios';

const MedicinesPage = () => {

    const [records, setRecords] = useState([
        { id: 1, user: '100', createdAt: '2024-09-08T15:00:00.00Z', name: 'Paracetamol', description: 'Remédio para dor', doseValue: 750, doseUnit: 'mg', frequencyValue: 8, frequencyUnit: 'hora(s)', startDate: '2024-10-05', endDate: '2024-10-15', updatedAt: '' },
        { id: 2, user: '100', createdAt: '2024-09-09T15:00:00.00Z', name: 'Prednisona', description: '', doseValue: 5, doseUnit: 'mg', frequencyValue: 12, frequencyUnit: 'hora(s)', startDate: '2024-10-05', endDate: '2024-10-12', updatedAt: '' },
        { id: 3, user: '100', createdAt: '2024-09-10T15:00:00.00Z', name: 'Benicar', description: 'Remédio para pressão', doseValue: 40, doseUnit: 'mg', frequencyValue: 1, frequencyUnit: 'dia(s)', startDate: '2022-04-01', endDate: '', updatedAt: '' },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const addRecord = (newRecord) => {
        const formattedFrequencyUnit = getFrequencyUnit(newRecord.frequencyUnit);
        setRecords((prevRecords) => [...prevRecords, { id: prevRecords.length + 1, ...newRecord }]);
        closeModal();
        const response = axios.post('http://localhost:8080/user/medicine', {
            name: newRecord.name,
            description: newRecord.description,
            frequencyValue: newRecord.frequencyValue,
            frequencyUnit: formattedFrequencyUnit,
            doseValue: newRecord.doseValue,
            doseUnit: newRecord.doseUnit,
            startDate: "2023-10-04T16:50:00",
            endDate: "2023-12-04T16:50:00",
        },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
        console.log(response)
        console.log(newRecord.frequencyUnit)
    };

    function getFrequencyUnit(frequencyUnit) {
        switch (frequencyUnit) {
            case "minuto(s)":
                return "MINUTES"
            case "hora(s)":
                return "HOURS"
            case "dia(s)":
                return "DAYS"
            case "semana(s)":
                return "WEEKS"
            case "mês(es)":
                return "MONTHS"
            case "esporádico":
                return "SPORADICALLY"
        }
        return frequencyUnit
    }

    return (
        <>
            <div className="page">
                <div><HeaderIn /></div>
                <div className="userContent">
                    <div>
                        <Menu />
                    </div>
                    <div className="pageContent">
                        <h1>Medicamentos</h1>
                        <div className="pageGrid">
                            <div>
                                <Medicines records={records} />
                            </div>
                            <div className="sendButton">
                                <button className="buttonPurple" onClick={openModal}>Adicionar um medicamento</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <MedicinesAdd onAddRecord={addRecord} records={records} />
                </Modal>
                <div><Footer /></div>
            </div>
        </>
    );
};

export default MedicinesPage;