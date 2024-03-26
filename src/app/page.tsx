import Image from "next/image";
import Link from "next/link";

const Inicio = () => {
    return(
        <>
        <main className="inicio">
            <section className="secao-inicio">
                <h1>Que tal uma música que combine com seu humor?</h1>
                <button className="botao-vamos-comecar">
                    <Link href="/Pergunta1" className="link-vamos-comecar">Vamos começar?</Link>
                </button>             
            </section>
        </main>   
        </>
    )
  }
  export default Inicio;