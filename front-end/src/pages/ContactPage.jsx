import Footer from "../components/Footer";
import Header from "../components/Header";
import classes from "../pages/ContactPage.module.css";

const ContactPage = () => {
  return (
    <div className={classes.page}>
      <div>
        <Header />
      </div>
      <div class={classes.pageContact}>
        <h1>Entre em Contato</h1>
        <p>
          Estamos aqui para ajudar! Entre em contato conosco através dos nossos
          canais de atendimento. Seja para tirar dúvidas, enviar sugestões ou
          buscar suporte, nossa equipe estará à disposição.
        </p>

        <div class={classes.contactInfo}>
          <div class={classes.contactItem}>
            <h3>Telefone</h3>
            <p>0800 000 000 000</p>
          </div>

          <div class={classes.contactItem}>
            <h3>WhatsApp</h3>
            <p>(51) 3333-3333</p>
          </div>

          <div class={classes.contactItem}>
            <h3>Email</h3>
            <p>
              <a href="">cartaosaude@ig.com.br</a>
            </p>
          </div>

          <div class={classes.contactItem}>
            <h3>Telegram</h3>
            <p>
              <a href="" target="_blank">
                canalcartaosaude
              </a>
            </p>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
