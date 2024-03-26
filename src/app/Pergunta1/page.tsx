"use client"
import Link from "next/link";
import { SetStateAction, useState } from "react";

const Pergunta1 = () => {

    const [sentimento, setSentimento] = useState("");

    const handleSentimentoChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setSentimento(event.target.value);
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
                        <button className="botao"><Link href="/Pergunta2" className="linkbotao">Próxima pergunta</Link></button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Pergunta1;