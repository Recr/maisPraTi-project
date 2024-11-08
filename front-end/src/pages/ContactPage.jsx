import Footer from "../components/Footer";
import Header from "../components/Header";


const ContactPage = () =>{

    return(
        <div className="page">
            <div><Header /></div>
            <div className="pageContent"> 
                <h1>Contato</h1>
                <p>Telefone: 0800 000 000 000</p>
                <p>Whatsapp:(51) 3333-3333</p>
                <p>Email: cartaosaude@ig.com.br</p>
                <p>Telegram: canalcartaosaude</p>
            </div>
            <div><Footer /></div>
        </div>

    )
}

export default ContactPage;