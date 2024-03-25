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
            <h1>Escolha uma cor!</h1>
            <div>
                <form>
                    <input type="radio" name="cor" value="amarelo" onChange={handleCorChange}/> Amarelo, me lembra o sol!
                    <input type="radio" name="cor" value="verde" onChange={handleCorChange}/> Acho que verde, tranquilo
                    <input type="radio" name="cor" value="azul" onChange={handleCorChange}/> Azul como o mar
                </form>
                {cor && <p>Você selecionou a cor {cor}</p>}
                <Link href="/Pergunta3"><button>Próxima pergunta</button></Link>
            </div>
        </>
    )
}

export default Pergunta2;