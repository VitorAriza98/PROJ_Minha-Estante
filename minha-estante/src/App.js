import React ,{useState} from 'react';
import axios from 'axios'
import './styles.css';

function App() {
    const [conteinerInput, setProcurar] = useState("") ;
    const procurarLivro=(evt) => {} 
    return (
    <div className="conteiner">
        <h1 className="title">Pesquisar Livro</h1>

        <div className="conteinerInput">
            <input
            type="text"
            placeholder="Procure seu livro..."
            value={conteinerInput} onChange={e=>setProcurar(e.target.value)}
            />
        <button className="buttonSearch">Procurar</button>
        </div>
       
    </div> 
    );
}
export default App