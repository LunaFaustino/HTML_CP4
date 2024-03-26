"use client"
import Link from "next/link";
import { SetStateAction, useState } from "react";

const Pergunta3 = () => {

    const [lugar, setLugar] = useState("");

    const handleLugarChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setLugar(event.target.value);
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
                        <button className="botao"><Link href="/Resultado" className="linkbotao">Próxima pergunta</Link></button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Pergunta3;