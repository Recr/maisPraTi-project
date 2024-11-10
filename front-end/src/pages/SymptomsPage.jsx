
import React, { useState } from 'react';
import HeaderIn from "../components/HeaderIn";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Modal from "../components/Modal";
import { Symptoms, SymptomsMod} from '../components/Symptoms';




const SymptomsPage = () => {
  
    const [records, setRecords] = useState([
        { id: 1, user_id: '100', name: 'Dor de cabeça', description: 'dor de cabeça frontal', intensity: 'moderado', register_date: '08/09/2024', created_at:'2024-09-08T15:00:00.00Z', updatedAt:''  },
        { id: 2, user_id: '100', name: 'Dor de dente', description: 'dor no canino superior', intensity: 'severo', register_date: '08/10/2024', created_at:'2024-10-08T15:00:00.00Z', updatedAt:''  },
        { id: 3, user_id: '100', name: 'Tontura', description: 'tontura', intensity: 'leve desconforto', register_date: '08/11/2024', created_at:'2024-11-08T15:00:00.00Z', updatedAt:''  },
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
                <h1>Sintomas</h1>
                <div className="pageGrid">
                    <div>
                        <Symptoms records={records}/>
                    </div>
                    <div className="sendButton">
                        <button className="buttonPurple" onClick={openModal}>Adicionar um registro de sintoma</button>
                    </div>
                </div>
            </div>

        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <SymptomsMod onAddRecord={addRecord} records={records}/>
        </Modal>
        <div><Footer /></div>
      </div>
      </>
    );
  };
  
  export default SymptomsPage;