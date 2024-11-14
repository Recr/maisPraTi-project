import React, { useState } from 'react';
import HeaderIn from "../components/HeaderIn";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Modal from "../components/Modal";
import Vaccines from '../components/Vaccines/Vaccines';
import VaccinesAdd from '../components/Vaccines/VaccinesAdd';

const VaccinesPage = () => {
  
    const [records, setRecords] = useState([
        { id: 1, user:'100', createdAt:'2024-09-08T15:00:00.00Z', name: 'Triplice viral', description:'Protege contra o sarampo, a caxumba e a rubéola', frequencyValue: '', frequencyUnit: 'esporadico', applicationDate: '2024-10-05',updatedAt:'' },
        { id: 2, user:'100', createdAt:'2024-09-08T15:00:00.00Z', name: 'Febre amarela', description:'Protege contra febre amarela', frequencyValue: '', frequencyUnit: 'esporadico', applicationDate: '2020-10-05',updatedAt:'' },
        { id: 3, user:'100', createdAt:'2024-09-08T15:00:00.00Z', name: 'Influenza', description:'Triplice valente, protege contra gripe e outras influenxas', frequencyValue: 1, frequencyUnit: 'ano(s)', applicationDate: '2024-05-05',updatedAt:'' },
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
                <h1>Vacinação</h1>
                <div className="pageGrid">
                    <div>
                        <Vaccines records={records}/>
                    </div>
                    <div className="sendButton">
                        <button className="buttonPurple" onClick={openModal}>Adicionar uma vacina</button>
                    </div>
                </div>
            </div>

        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <VaccinesAdd onAddRecord={addRecord} records={records}/>
        </Modal>
        <div><Footer /></div>
      </div>
      </>
    );
  };
  
  export default VaccinesPage;