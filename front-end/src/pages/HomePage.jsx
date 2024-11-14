import Header from "../components/Header";
import "../App.css";
import Logo from "../assets/logo.png";
import Footer from "../components/Footer";


const HomePage = () => {
  return (
    <div>
    <Header />   
      <div className="content">
        <div className="div--banner">
          <h1>Sua saúde descomplicada</h1>
          <p>
            This hero is built with a flex layout, aligned and justified so that
            the content will always be centered horizontally and vertically. To
            change this section’s background, select the “Hero Overlay” then
            scroll to the background section of the Style panel and replace the
            image. You can also adjust the opacity of the overlay’s black
            background for better contrast.
          </p>
          <button>Saiba mais</button>
        </div>
        <div className="cont--info">
          <h1>Seus dados de saúde reunidos num só lugar</h1>
          <p>
            Use these cards when you want to display content with an image, such
            as a blog post or product. They’re built with CSS grid to enable the
            3-column layout. When you select the “Cards Grid Container,” you’ll
            see a red icon on the top right. Click the icon to edit the number
            of columns, the column gap, and more!
          </p>
          <p>
            The card images have fit set to cover, so they fill their masking
            container without stretching. Try making the “Cards Image Mask” a
            circle using border-radius or adjusting the size ratio using top
            padding. Don’t forget to set an alt description for each image,
            which will help with accessibility.
          </p>
          <div className="grid">
            <div className="item">
              <img className="itemImage" src='src/assets/vaccine_cottonbro.jpg' alt="Seringa frasco-ampola para vacinação por Cottonbro Studio" />
              <h3>Vacinas</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.{" "}
              </p>
            </div>
            <div className="item">
              <img className="itemImage" src='src/assets/medicines_pietrozj.jpg' alt="Medicamento em cápsulas por Pietro Jeng" />
              <h3>Medicamentos</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.{" "}
              </p>
            </div>
            <div className="item">
            <img className="itemImage" src='src/assets/appointment_pixabay.jpg' alt="Agenda e estetoscópio por Pixabay." />
              <h3>Agenda de consultas</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.{" "}
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
