import {useEffect, useState} from "react";
import './style.css';
import App from "../../App";
import {Link} from "react-router-dom";

function Api() {
    const [nutri,setNutri] = useState([]);

    useEffect(()=> {
        function loadApi() {
            console.log('teste')

            let url = "https://sujeitoprogramador.com/rn-api/?api=posts";

            fetch(url)
                .then((r) => r.json())
                .then((json) => {
                    console.log(json);
                    setNutri(json);
                })
        };

        loadApi();

    }, [])
    return (
        <div className="container">
            <h1>
                <strong>React Nutric</strong>
            </h1>
            <Link to="/">Home</Link>
            {nutri.map((item)=>{
                return (
                    <article key={item.id} className="post">
                        <strong className="titulo">{item.titulo}</strong>
                        <img src={item.capa} alt={item.titulo} className="capa"/>
                        <p className="subtitulo">
                            {item.subtitulo}
                        </p>
                        <a className="botao">Acessar</a>
                    </article>
                )
            })}
        </div>
    );
}

export default Api;
