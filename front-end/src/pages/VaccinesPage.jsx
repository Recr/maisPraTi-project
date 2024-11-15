import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderIn from "../components/HeaderIn";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Modal from "../components/Modal";
import Vaccines from '../components/Vaccines/Vaccines';
import VaccinesAdd from '../components/Vaccines/VaccinesAdd';

const VaccinesPage = () => {
  
    //Carrega os registros do BD
    const [records, setRecords] = useState([]);
    useEffect(()=>{
        const recoverRecords = async () => {
            try{
                const response = await axios.get('http://localhost:8080/user/vaccine',{
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                })
                console.log('Registros de vacina: ', response.data)
                setRecords(response.data.listVaccine || []);
            } catch(error){
                console.error('Erro ao buscar registros de vacina:', error)
                setRecords([])
            }
        }
        recoverRecords();
    },[])

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
