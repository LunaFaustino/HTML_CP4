"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const Inicio = () => {

    useEffect(() => {
        alert("Seja bem-vindo");
    }, []);

    return(
        <>
        <main className="inicio">
            <section className="secao-inicio">
                <h1>Que tal uma música que combine com seu humor?</h1>
                <button className="botao-vamos-comecar">
                    <Link href="/App" className="link-vamos-comecar">Vamos começar?</Link>
                </button>             
            </section>
        </main>   
        </>
    )
  }
  export default Inicio;