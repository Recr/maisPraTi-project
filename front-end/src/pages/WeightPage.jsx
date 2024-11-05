//Importante: Falta trocar o header para o de navegação interna
import React, { useState } from 'react';
import HeaderIn from "../components/HeaderIn";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Modal from "../components/Modal";


const UserPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return(
        <>
        <div className="page">
            <div><HeaderIn /></div>
            <div className="userContent">
                <div>
                    <Menu />
                </div>
                <div className="pageContent">
                    <h1>Peso</h1>
                    <button onClick={openModal}>Inserir um registro</button>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum reprehenderit asperiores harum doloremque fugiat ea nemo. Illo, velit possimus atque non eveniet autem totam molestiae alias enim incidunt dolore repudiandae?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum reprehenderit asperiores harum doloremque fugiat ea nemo. Illo, velit possimus atque non eveniet autem totam molestiae alias enim incidunt dolore repudiandae?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum reprehenderit asperiores harum doloremque fugiat ea nemo. Illo, velit possimus atque non eveniet autem totam molestiae alias enim incidunt dolore repudiandae?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum reprehenderit asperiores harum doloremque fugiat ea nemo. Illo, velit possimus atque non eveniet autem totam molestiae alias enim incidunt dolore repudiandae?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum reprehenderit asperiores harum doloremque fugiat ea nemo. Illo, velit possimus atque non eveniet autem totam molestiae alias enim incidunt dolore repudiandae?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum reprehenderit asperiores harum doloremque fugiat ea nemo. Illo, velit possimus atque non eveniet autem totam molestiae alias enim incidunt dolore repudiandae?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum reprehenderit asperiores harum doloremque fugiat ea nemo. Illo, velit possimus atque non eveniet autem totam molestiae alias enim incidunt dolore repudiandae?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum reprehenderit asperiores harum doloremque fugiat ea nemo. Illo, velit possimus atque non eveniet autem totam molestiae alias enim incidunt dolore repudiandae?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum reprehenderit asperiores harum doloremque fugiat ea nemo. Illo, velit possimus atque non eveniet autem totam molestiae alias enim incidunt dolore repudiandae?
                    </p>
                </div>
            </div>
            <div><Footer /></div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2>Registre seu peso</h2>
                <p>Este é um exemplo de modal em React!</p>
            </Modal>
        </div>
        </>

    )
}

export default UserPage;