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
            <h1>Como está se sentindo hoje?</h1>
            <div>
                <form>
                    <input type="radio" name="sentimento" value="está bem" onChange={handleSentimentoChange}/> Estou bem :D
                    <input type="radio" name="sentimento" value="está mais ou menos" onChange={handleSentimentoChange}/> Hmm estou mais ou menos :/
                    <input type="radio" name="sentimento" value="está meio pra baixo" onChange={handleSentimentoChange}/> Estou meio pra baixo :c
                </form>
                {sentimento && <p>Você selecionou que {sentimento}</p>}
                <Link href="/Pergunta2"><button>Próxima pergunta</button></Link>
            </div>
        </>
    )
}

export default Pergunta1;