"use client"
import Link from "next/link";
import { SetStateAction, useState } from "react";

interface Pergunta1Props {
    saveRespostaHandler: (pergunta: string, resposta: string) => void;
}
   
const Pergunta1: React.FC<Pergunta1Props> = ({ saveRespostaHandler }) => {

    const [sentimento, setSentimento] = useState("");
    // troca do SetStateAction para usar direto o tipo string
    const handleSentimentoChange = (event: React.ChangeEvent<HTMLInputElement>) => {        
        const resposta = event.target.value;                
        setSentimento(resposta);        
        //isso vai atualizar o estadosRespostas com a resposta selecionada        
    }
    const saveResposta = () => {
        saveRespostaHandler("Pergunta1", sentimento);
    }
    return(
        <>
            <main className="pergunta">
                <section className="sessao">
                    <h1>Como está se sentindo hoje?</h1>
                    <div className="geral">
                        <form>
                            <div className="opcoes">
                                <label>
                                    <input type="radio" name="sentimento" value="está bem" onChange={handleSentimentoChange}/> Estou bem 😊
                                </label>
                                <label>
                                    <input type="radio" name="sentimento" value="está mais ou menos" onChange={handleSentimentoChange}/> Hmm estou mais ou menos 🤔
                                </label>
                                <label>
                                    <input type="radio" name="sentimento" value="está meio pra baixo" onChange={handleSentimentoChange}/> Estou meio pra baixo 😢
                                </label>
                            </div>
                        </form>
                        <div className="selecionado">
                            {sentimento && <p>Você selecionou que {sentimento}</p>}
                        </div>
                        <button className="botao" onClick={saveResposta}>Próxima pergunta</button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Pergunta1;