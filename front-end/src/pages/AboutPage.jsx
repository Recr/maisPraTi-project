import Footer from "../components/Footer";
import Header from "../components/Header";


const AboutPage = () =>{

    return(
        <div className="page">
            <div><Header /></div>
            <div className="pageContent">                
                <h1>Sobre nós</h1>
                <h2>Seus dados de saúde reunidos num só lugar</h2>
                <br />
                <p>
                    O Solutia foi desenvolvido para reunir e organizar dados de saúde, proporcionando aos usuários um acompanhamento
                    centralizado e completo de sua saúde e bem-estar. Esta é uma plataforma digital onde é possível registrar e acessar informações de saúde, como histórico
                    de vacinas, consultas e medicamentos em uso.
                    <br /><br />
                    Essa ferramenta é ideal para pessoas que desejam monitorar de perto suas condições de saúde e acompanhar, em um único lugar,
                    os dados relacionados ao seu histórico médico. Além de facilitar o acesso a informações importantes, o Cartão de Saúde torna mais prático
                    o controle e o acompanhamento contínuo de indicadores de saúde ao longo do tempo.
                </p>
            </div>

            <div><Footer /></div>
        </div>

    )
}

export default AboutPage;