import Image from "next/image";
import Link from "next/link";

const Inicio = () => {
    return(
        <>
        <main className="inicio">
            <section className="batata">
                <h1>Que tal uma música que combine com seu humor?</h1>
                <button className="vamos-comecar">
                    <Link href="/Perguntas1" className="link-vamos-comecar">Vamos começar?</Link>
                </button>             
            </section>
            <Image src="/assets/inicio.jpg" alt="Imagem inicio" width="1000" height="512" className="imagem-inicio"></Image>
        </main>   
        </>
    )
  }
  export default Inicio;