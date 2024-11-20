
import { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderIn from "../components/HeaderIn";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Modal from "../components/Modal";
import WeightCheck from '../components/WeightCheck/WeightCheck';
import WeightAdd from '../components/WeightCheck/WeightAdd';
import { useNavigate } from 'react-router-dom';


const WeightPage = () => {

    //Carrega os registros de peso do BD
    const [records, setRecords] = useState([]);
    useEffect(() => {
        const recoverRecords = async () => {
            try {
                const response = await axios.get('http://localhost:8080/user/weight-check', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                })
                console.log('Registros de peso: ', response.data)
                setRecords(response.data.weightCheckList || []);
            } catch (error) {
                console.error('Erro ao buscar registros de peso:', error)
                setRecords([])
            }
        }
        recoverRecords();
    }, [])

    //Configura o modal para adicionar registros
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const addRecord = (newRecord) => {
        setRecords((prevRecords) => [...prevRecords, { ...newRecord }]);
        closeModal();
    };

    const navigate = useNavigate();

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
                                {/* Carrega o componente WeightCheck (que lista registros) e passa records (registros do BD) para ele */}
                                <WeightCheck records={records} />
                            </div>
                            <div className="sendButton">
                                {/* Botão para abrir o Modal para adicionar um novo registro */}
                                <button className="buttonPurple" onClick={openModal}>Novo registro</button>
                                <button className="buttonPurple" onClick={() => navigate('/relatory', { state: { items: records, type: "Peso" } })}>
                                    Gerar Relatório
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Modal irá abrir com o componente WeightAdd ao clicar no botão. Passamos addRecord e records para ele*/}
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <WeightAdd onAddRecord={addRecord} records={records} />
                </Modal>
                <div><Footer /></div>
            </div>
        </>
    );
};

export default WeightPage;