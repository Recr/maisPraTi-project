import Header from "../components/Header";
import "../App.css";
import Footer from "../components/Footer";


const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <div className="div--banner">
          <div className="div--banner--text">
            <h1>Sua saúde descomplicada</h1>
            <p>
              Salutia é um aplicativo <strong>inovador</strong>  que ajuda você a gerenciar sua <strong>saúde </strong>
              de forma <strong>prática</strong> e segura. Com uma interface <strong>intuitiva</strong>, ele permite
              registrar e acompanhar informações importantes para o seu <strong>bem-estar</strong>.
              Tudo em um só lugar, para facilitar o cuidado com sua saúde!
            </p>
          </div>
        </div>
        <div className="cont--info">
          <h1>Seus dados de saúde reunidos num só lugar</h1>
          <p>
            Com o Salutia, você organiza e acessa todas as informações importantes da sua saúde de forma prática e segura. Um único aplicativo para gerenciar seu bem-estar com facilidade e tranquilidade. Simplifique o cuidado com a sua saúde!
          </p>
          <div className="grid">
            <div className="item">
              <img className="itemImage" src='src/assets/vaccine_cottonbro.jpg' alt="Seringa frasco-ampola para vacinação por Cottonbro Studio" />
              <h3>Vacinas</h3>
              <p>
                Histórico vacinal sempre à mão.
              </p>
            </div>
            <div className="item">
              <img className="itemImage" src='src/assets/medicines_pietrozj.jpg' alt="Medicamento em cápsulas por Pietro Jeng" />
              <h3>Medicamentos</h3>
              <p>
                Tratamentos organizados com facilidade.
              </p>
            </div>
            <div className="item">
              <img className="itemImage" src='src/assets/appointment_pixabay.jpg' alt="Agenda e estetoscópio por Pixabay." />
              <h3>Agenda de consultas</h3>
              <p>
                Controle fácil das suas consultas.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
