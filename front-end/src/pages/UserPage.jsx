//Importante: Falta trocar o header para o de navegação interna

import HeaderIn from "../components/HeaderIn";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

const UserPage = () => {
    return(
        <div className="page">
            <div><HeaderIn /></div>
            <div className="userContent">
                <div>
                    <Menu />
                </div>
                <div className="pageContent">
                    <h1>User Page</h1>
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
        </div>

    )
}

export default UserPage;