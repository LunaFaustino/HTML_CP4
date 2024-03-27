"use client"
import Link from "next/link";
import { SetStateAction, useState } from "react";

interface Pergunta3Props {
    saveRespostaHandler: (pergunta: string, resposta: string) => void;
}
   
const Pergunta3: React.FC<Pergunta3Props> = ({ saveRespostaHandler }) => {

    const [lugar, setLugar] = useState("");

    const handleLugarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const resposta = event.target.value;
        setLugar(event.target.value);
        //isso vai atualizar o estadosRespostas com a resposta selecionada        
    }
    const saveResposta = () => {
        saveRespostaHandler("Pergunta3", lugar);
    }
    return(
        <>
            <main className="pergunta">
                <section className="sessao">
                    <h1>Se pudesse estar em um lugar, qual estaria?</h1>
                    <div className="geral">
                        <form>
                            <div className="opcoes">
                                <label>
                                <input type="radio" name="lugar" value="praia" onChange={handleLugarChange}/> Na praia, tá muito calor 🏖️
                                </label>
                                <label>
                                <input type="radio" name="lugar" value="parque" onChange={handleLugarChange}/> No parque, aproveitando a brisa 🛝
                                </label>
                                <label>
                                <input type="radio" name="lugar" value="bosque" onChange={handleLugarChange}/> No bosque, um pouco de silêncio 🌼
                                </label>
                                <label>
                                <input type="radio" name="lugar" value="casa" onChange={handleLugarChange}/> Ah, prefiro ficar em casa mesmo 🏠
                                </label>
                            </div>
                        </form>
                        <div className="selecionado">
                            {lugar && <p>Você selecionou {lugar}</p>}
                        </div>
                        <button className="botao" onClick={saveResposta}>Finalizar</button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Pergunta3;