"use client"
import Link from "next/link";
import { SetStateAction, useState } from "react";

interface Pergunta2Props {
    saveRespostaHandler: (pergunta: string, resposta: string) => void;
}
   
const Pergunta2: React.FC<Pergunta2Props> = ({ saveRespostaHandler }) => {

    const [cor, setCor] = useState("");

    const handleCorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const resposta = event.target.value;
        setCor(event.target.value);
        //isso vai atualizar o estadosRespostas com a resposta selecionada
        
    }
    const saveResposta = () => {
        saveRespostaHandler("Pergunta2", cor);
    }
    return(
        <>
            <main className="pergunta">
                <section className="sessao">
                    <h1>Escolha uma cor!</h1>
                    <div className="geral">
                        <form>
                            <div className="opcoes">
                                <label>
                                    <input type="radio" name="cor" value="amarelo" onChange={handleCorChange}/> Amarelo, me lembra o sol 🌞
                                </label>
                                <label>
                                    <input type="radio" name="cor" value="verde" onChange={handleCorChange}/> Acho que verde, tranquilo 🍃
                                </label>
                                <label>
                                    <input type="radio" name="cor" value="azul" onChange={handleCorChange}/> Azul como o mar 🌊
                                </label>
                            </div>
                        </form>
                        <div className="selecionado">
                            {cor && <p>Você selecionou a cor {cor}</p>}
                        </div>
                        <button className="botao" onClick={saveResposta}>Próxima pergunta</button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Pergunta2;