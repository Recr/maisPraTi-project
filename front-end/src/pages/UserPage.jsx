//Importante: Falta trocar o header para o de navegação interna

import HeaderIn from "../components/HeaderIn";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import classes from "./UserPage.module.css"

const UserPage = () => {
    return (
        <div className={classes.page}>
            <div><HeaderIn /></div>
            <div className={classes.userContent}>
                <div className={classes.divMenu}>
                    <Menu />
                </div>
                <div className={classes.divContent}>
                    <div className={classes.divImage}>
                        <img className={classes.userImage} src='src/assets/users_pixabay.jpg' alt="Mãos unidas" />
                    </div>
                    <div className={classes.divInfo}>
                        <h1>Bem-vindo(a) ao <span className={classes.salutia}>Salutia!</span></h1>
                        <p>A plataforma digital que centraliza e protege todas as suas informações de saúde! Aqui, você pode acompanhar seu histórico médico, acessar resultados de exames, gerenciar vacinas, consultas, e muito mais, tudo de forma rápida e segura.
                            <br /><br />
                            O Health Card foi desenvolvido para oferecer mais autonomia e praticidade, facilitando o acesso e o compartilhamento de informações essenciais com profissionais de saúde sempre que necessário. Explore as funcionalidades e mantenha-se sempre atualizado(a) sobre sua saúde. Aproveite o futuro do cuidado digital!
                        </p>
                    </div>
                </div>
            </div>
            <div><Footer /></div>
        </div>
    )
}

export default UserPage;