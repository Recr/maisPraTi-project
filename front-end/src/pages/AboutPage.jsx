import Footer from "../components/Footer";
import Header from "../components/Header";
import classes from "../pages/AboutPage.module.css";

const AboutPage = () => {
  return (
    <div className={classes.page}>
      <div>
        <Header />
      </div>
      <div className={classes.pageAbout}>
        <h1>Sobre o Salutia</h1>
        <p>
          Cuidar da sua saúde não precisa ser complicado. O Salutia é a solução
          completa para quem busca gerenciar informações de saúde de maneira
          prática, segura e eficiente. Com uma abordagem inovadora, oferecemos
          uma plataforma que centraliza todos os dados relevantes para o seu
          bem-estar, simplificando o cuidado com sua saúde no dia a dia.
        </p>
        <p>
          Nosso objetivo é empoderar você a tomar decisões mais informadas sobre
          sua saúde, utilizando tecnologia de ponta e uma interface intuitiva
          que garante facilidade de uso. O Salutia é mais do que uma plataforma;
          é um aliado para quem deseja manter tudo sob controle, sem
          complicações.
        </p>

        <div className={classes.highlights}>
          <p>
            <strong>Por que escolher o Salutia?</strong>
          </p>
        </div>
        <ul>
          <li>
            Centralização de informações: todas as informações importantes sobre
            sua saúde em um único lugar.
          </li>
          <li>
            Facilidade e praticidade: design intuitivo para todos,
            independentemente do nível de familiaridade com tecnologia.
          </li>
          <li>
            Segurança em primeiro lugar: seus dados protegidos com as melhores
            práticas de segurança digital.
          </li>
        </ul>

        <p>Com funcionalidades que fazem a diferença, o Salutia se destaca:</p>
        <ul>
          <li>
            <strong>Vacinas:</strong> Histórico vacinal sempre à mão, com
            lembretes para manter sua imunização em dia.
          </li>
          <li>
            <strong>Medicamentos:</strong> Organize e acompanhe seus tratamentos
            de forma prática e confiável.
          </li>
          <li>
            <strong>Agenda de Consultas:</strong> Planeje e monitore seus
            compromissos médicos com facilidade.
          </li>
          <li>
            <strong>Histórico Clínico:</strong> Armazene exames, diagnósticos e
            informações importantes para suas consultas.
          </li>
        </ul>

        <p>
          No Salutia, acreditamos que cuidar da saúde deve ser algo simples e
          acessível. Trabalhamos para oferecer uma plataforma que une inovação,
          funcionalidade e segurança, ajudando você a focar no que realmente
          importa: viver com mais saúde e tranquilidade.
        </p>

        <div className={classes.cta}>
          <p>
            <strong>Cadastre-se</strong> no Salutia agora e descubra uma nova
            forma de cuidar do seu bem-estar!
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
