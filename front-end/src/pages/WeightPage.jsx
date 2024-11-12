
import React, { useState } from 'react';
import HeaderIn from "../components/HeaderIn";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Modal from "../components/Modal";
import { WeightCheck,WeightMod } from '../components/WeightCheck';


const WeightPage = () => {
  
    const [records, setRecords] = useState([
        { id: 1, user: '100', weight: '66.5', date: '08/09/2024', createdAt:'2024-09-08T15:00:00.00Z', updatedAt:''  },
        { id: 2, user: '100', weight: '66.0', date: '08/10/2024', createdAt:'2024-10-08T15:00:00.00Z', updatedAt:''  },
        { id: 3, user: '100', weight: '66.4', date: '08/11/2024', createdAt:'2024-11-08T15:00:00.00Z', updatedAt:''  },
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
                <h1>Peso</h1>
                <div className="pageGrid">
                    <div>
                        <WeightCheck records={records}/>
                    </div>
                    <div className="sendButton">
                        <button className="buttonPurple" onClick={openModal}>Adicionar um registro de peso</button>
                    </div>
                </div>
            </div>

        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <WeightMod onAddRecord={addRecord} records={records}/>
        </Modal>
        <div><Footer /></div>
      </div>
      </>
    );
  };
  
  export default WeightPage;