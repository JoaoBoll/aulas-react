import {Link} from "react-router-dom";

function Home(props) {
    return (
        <div>
            <h1>Bem vindo a pagina Home</h1>
            <span>Sujeito Programador</span>
            <br/>
            <br/>
            <Link to="/sobre">Sobre</Link><br/>
            <Link to="/api">Mexendo com API</Link>
        </div>
    );
}

export default Home;
