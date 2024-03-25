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
            <h1>Se pudesse estar em um lugar, qual estaria?</h1>
            <div>
                <form>
                    <input type="radio" name="lugar" value="praia" onChange={handleLugarChange}/> Na praia, tá muito calor!
                    <input type="radio" name="lugar" value="parque" onChange={handleLugarChange}/> No parque, aproveitando a brisa
                    <input type="radio" name="lugar" value="bosque" onChange={handleLugarChange}/> No bosque, um pouco de silêncio...
                    <input type="radio" name="lugar" value="casa" onChange={handleLugarChange}/> Ah, prefiro ficar em casa mesmo ^^
                </form>
                {lugar && <p>Você selecionou {lugar}</p>}
                <Link href=""><button>Vamos para sua indicação!</button></Link>
            </div>
        </>
    )
}

export default Pergunta3;