import {useEffect, useState} from "react";

function Lista() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [idade, setIdade] = useState('');
    const [tarefa, setTarefa] = useState('');

    const [user, setUser] = useState({});
    const [tarefas, setTarefas] = useState([]);

    useEffect(() => {
        const tarefasStorage = localStorage.getItem('@tarefas');

        if (tarefasStorage) {
            setTarefas(JSON.parse(tarefasStorage));
        }

        return () => {

        }
    }, []);

    useEffect(() => {
        localStorage.setItem('@tarefas', JSON.stringify(tarefas));
    }, [tarefas]);

    function handleRegister(e) {
        e.preventDefault();
        alert("Usuário registrado com Sucesso");
        setUser({
            nome: nome,
            idade: idade,
            email: email
        })
    }

    function handleRegisterTarefas(e) {
        e.preventDefault();
        alert("Item adicionado na lista.");
        setTarefas([...tarefas, tarefa]);
        setTarefa('')

    }

    return (
        <div>
            <h1>
                Cadastros
            </h1>
            <h2>
                Cadastrar Usuário
            </h2>
            <form onSubmit={handleRegister}>
                <label>Nome:</label><br/>
                <input placeholder="Digite seu Nome"
                       value={nome}
                       onChange={(e) => setNome(e.target.value)}/><br/>

                <label>E-mail:</label><br/>
                <input placeholder="Digite seu E-mail"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}/><br/>

                <label>Idade:</label><br/>
                <input placeholder="Digite sua Idade"
                       value={idade}
                       onChange={(e) => setIdade(e.target.value)}/><br/>

                <button type="submit">Registrar</button>
            </form>

            <br/>
            <br/>

            <div>
                <span>Bem vindo: {user.nome}</span><br/>
                <span>Idade: {user.idade}</span><br/>
                <spawn>E-mail: {user.email}</spawn>
            </div>

            <br/>
            <br/>

            <h2>
                Cadastrar Tarefas
            </h2>
            <form onSubmit={handleRegisterTarefas}>
                <label>Tarefa:</label>
                <input placeholder="Digite o nome da Tafefa"
                       value={tarefa}
                       onChange={(e) => setTarefa(e.target.value)}/>
                <button type="submit">Registrar</button>

            </form>

            <ul>
                {tarefas.map((tarefa) => (
                    <li key={tarefa}>{tarefa}</li>
                ))}
            </ul>
        </div>
    )
}
