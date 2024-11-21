import Footer from "../components/Footer";
import Header from "../components/Header";
import classes from "../pages/FAQPage.module.css";

const FAQPage = () => {
  return (
    <div className={classes.page}>
        <Header />
      <div className={classes.pageFaq}>
        <h1>Perguntas Frequentes</h1>
        <p>
          Encontre aqui as respostas para as dúvidas mais comuns sobre o
          Salutia. Se não encontrar o que procura, entre em contato conosco
          através da página <a href="">Contato</a>.
        </p>

        <div className={classes.faqSection}>
          <div className={classes.faqItem}>
            <h3>O que é o Salutia?</h3>
            <p>
              O Salutia é uma plataforma web projetada para facilitar o
              gerenciamento das suas informações de saúde, como histórico
              vacinal, medicamentos, agendamentos e muito mais.
            </p>
          </div>

          <div className={classes.faqItem}>
            <h3>Como acesso a plataforma Salutia?</h3>
            <p>
              Você pode acessar o Salutia diretamente pelo navegador, em
              qualquer dispositivo com acesso à internet. Basta visitar nosso
              site oficial e fazer login ou criar uma conta.
            </p>
          </div>

          <div className={classes.faqItem}>
            <h3>O Salutia é seguro?</h3>
            <p>
              Sim! A segurança dos seus dados é nossa prioridade. Utilizamos as
              melhores práticas de segurança digital para garantir a privacidade
              das suas informações.
            </p>
          </div>

          <div className={classes.faqItem}>
            <h3>Como posso acessar meu histórico de consultas no Salutia?</h3>
            <p>
              Após fazer login na plataforma, você encontrará a opção "Histórico
              de Consultas" no menu principal. Lá, é possível visualizar e
              gerenciar todos os registros cadastrados.
            </p>
          </div>

          <div className={classes.faqItem}>
            <h3>Preciso de ajuda, como entrar em contato?</h3>
            <p>
              Caso precise de suporte ou tenha dúvidas, acesse a página{" "}
              <a href="">Contato</a> para visualizar nossos canais de
              atendimento, como telefone, WhatsApp e email.
            </p>
          </div>
        </div>
      </div>
        <Footer />
    </div>
  );
};

export default FAQPage;
