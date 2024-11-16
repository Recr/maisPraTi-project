import React, { useState, useEffect } from 'react';
import HeaderIn from "../components/HeaderIn";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Modal from "../components/Modal";
import Medicines from '../components/Medicines/Medicines';
import MedicinesAdd from '../components/Medicines/MedicinesAdd';
import axios from 'axios';

const MedicinesPage = () => {

    //Carrega os registros de peso do BD
    const [records, setRecords] = useState([]);
    useEffect(()=>{
        const recoverRecords = async () => {
            try{
                const response = await axios.get('http://localhost:8080/user/medicine',{
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                })
                console.log('Registros de medicamento: ', response.data)
                setRecords(response.data.listMedicine || []);
            } catch(error){
                console.error('Erro ao buscar registros de peso:', error)
                setRecords([])
            }
        }
        recoverRecords();
    },[])

    //Configura o modal para adicionar registros
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const addRecord = (newRecord) => {
        setRecords((prevRecords) => [...prevRecords, { ...newRecord }]);
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