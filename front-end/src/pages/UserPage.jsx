//Importante: Falta trocar o header para o de navegação interna

import HeaderIn from "../components/HeaderIn";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import "./UserPage.css"
const UserPage = () => {
    return (
        <div className="page">
            <div><HeaderIn /></div>
            <div className="userContent">
                <div className="div--menu">
                    <Menu />
                </div>
                <div className="div--content">
                    <div className="div--image">
                        <img className="userImage" src='src/assets/users_pixabay.jpg' alt="Mãos unidas" />
                    </div>
                    <div className="info"><h1>Bem-vindo(a) ao Health Card!</h1>
                        <p>A plataforma digital que centraliza e protege todas as suas informações de saúde! Aqui, você pode acompanhar seu histórico médico, acessar resultados de exames, gerenciar vacinas, consultas, e muito mais, tudo de forma rápida e segura.

                           <br /><br /> O Health Card foi desenvolvido para oferecer mais autonomia e praticidade, facilitando o acesso e o compartilhamento de informações essenciais com profissionais de saúde sempre que necessário. Explore as funcionalidades e mantenha-se sempre atualizado(a) sobre sua saúde. Aproveite o futuro do cuidado digital!</p></div>
                </div>
            </div>
            <div><Footer /></div>
        </div>

    )
}

export default UserPage;