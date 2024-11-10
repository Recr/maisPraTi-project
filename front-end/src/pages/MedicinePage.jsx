//Importante: Falta trocar o header para o de navegação interna
import React, { useState } from 'react';
import HeaderIn from "../components/HeaderIn";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Modal from "../components/Modal";
import { Medicines, MedicinesMod } from '../components/MedicinesMod';


const MedicinePage = () => {
  
    const [records, setRecords] = useState([
        { id: 1, name: 'Paracetamol', intensity: '750', intensityUnit: 'mg', frequency: '8', frequencyUnit: 'hora(s)', startDate: '05/10/2024', endDate: '15/10/2024' },
        { id: 2, name: 'Prednisona', intensity: '5', intensityUnit: 'mg', frequency: '12', frequencyUnit: 'hora(s)', startDate: '05/10/2024', endDate: '12/10/2024' },
        { id: 3, name: 'Benicar', intensity: '40mg', intensityUnit: 'mg', frequency: '1', frequencyUnit: 'dia(s)', startDate: '01/04/2022', endDate: '' },
      ]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const addRecord = (newRecord) => {
        setRecords((prevRecords) => [...prevRecords, { id: prevRecords.length + 1, ...newRecord }]);
        closeModal();
      };
  
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
                        <Medicines records={records}/>
                    </div>
                    <div className="sendButton">
                        <button className="buttonPurple" onClick={openModal}>Adicionar um medicamento</button>
                    </div>
                </div>
            </div>

        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <MedicinesMod onAddRecord={addRecord}/>
        </Modal>
        <div><Footer /></div>
      </div>
      </>
    );
  };
  
  export default MedicinePage;