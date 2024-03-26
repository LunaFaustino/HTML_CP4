"use client"
import Link from "next/link";
import { SetStateAction, useState } from "react";

const Pergunta2 = () => {

    const [cor, setCor] = useState("");

    const handleCorChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setCor(event.target.value);
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
                        <button className="botao"><Link href="/Pergunta3" className="linkbotao">Próxima pergunta</Link></button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Pergunta2;