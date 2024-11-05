//Importante: Falta trocar o header para o de navegação interna
import React, { useState } from 'react';
import HeaderIn from "../components/HeaderIn";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Modal from "../components/Modal";
import Medicines from "../components/Medicines";
import MedicinesMod from '../components/MedicinesMod';


const MedicinePage = () => {
  
    const [records, setRecords] = useState([
        { id: 1, name: 'Nome_Medicamento id6', dose: 'Dose', frequency: 'Frequência', startDate: 'Data de Início', endDate: '' },
        { id: 2, name: 'Nome_Medicamento id5', dose: 'Dose', frequency: 'Frequência', startDate: 'Data de Início', endDate: 'Data de Fim' },
        { id: 3, name: 'Nome_Medicamento id4', dose: 'Dose', frequency: 'Frequência', startDate: 'Data de Início', endDate: '' },
      ]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  
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
                    <div>
                        <button className="buttonPurple" onClick={openModal}>Inserir um registro</button>
                    </div>
                </div>
            </div>

        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <MedicinesMod />
        </Modal>
        <div><Footer /></div>
      </div>
      </>
    );
  };
  
  export default MedicinePage;