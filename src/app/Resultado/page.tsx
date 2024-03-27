import React from 'react';
import { Respostas } from '../Interface/types'; 
import { musicasSugeridas, Musica } from '../Musicas/musicas';
import Link from 'next/link';

interface ResultadoProps{
    respostas : Respostas;
}

const Resultado : React.FC<ResultadoProps> = ({ respostas }) => {            
    const sugestoesMusicas = () => {
                if (respostas.Pergunta1 === 'está bem' && respostas.Pergunta2 === 'amarelo' && respostas.Pergunta3 === 'praia'){
                    return musicasSugeridas.Musica1;
                } else if (respostas.Pergunta1 === 'está bem' && respostas.Pergunta2 === 'amarelo' && respostas.Pergunta3 === 'parque'){
                    return musicasSugeridas.Musica2;
                } else if (respostas.Pergunta1 === 'está bem' && respostas.Pergunta2 === 'amarelo' && respostas.Pergunta3 === 'bosque'){
                    return musicasSugeridas.Musica3;
                } else if (respostas.Pergunta1 === 'está bem' && respostas.Pergunta2 === 'amarelo' && respostas.Pergunta3 === 'casa'){
                    return musicasSugeridas.Musica4;
                } else if (respostas.Pergunta1 === 'está mais ou menos' && respostas.Pergunta2 === 'amarelo' && respostas.Pergunta3 === 'praia'){
                    return musicasSugeridas.Musica5;
                } else if (respostas.Pergunta1 === 'está mais ou menos' && respostas.Pergunta2 === 'amarelo' && respostas.Pergunta3 === 'parque'){
                    return musicasSugeridas.Musica6;
                } else if (respostas.Pergunta1 === 'está mais ou menos' && respostas.Pergunta2 === 'amarelo' && respostas.Pergunta3 === 'bosque'){
                    return musicasSugeridas.Musica7;
                } else if (respostas.Pergunta1 === 'está mais ou menos' && respostas.Pergunta2 === 'amarelo' && respostas.Pergunta3 === 'casa'){
                    return musicasSugeridas.Musica8;
                } else if (respostas.Pergunta1 === 'está meio pra baixo' && respostas.Pergunta2 === 'amarelo' && respostas.Pergunta3 === 'praia'){
                    return musicasSugeridas.Musica9;
                } else if (respostas.Pergunta1 === 'está meio pra baixo' && respostas.Pergunta2 === 'amarelo' && respostas.Pergunta3 === 'parque'){
                    return musicasSugeridas.Musica10;
                } else if (respostas.Pergunta1 === 'está meio pra baixo' && respostas.Pergunta2 === 'amarelo' && respostas.Pergunta3 === 'bosque'){
                    return musicasSugeridas.Musica11;
                } else if (respostas.Pergunta1 === 'está meio pra baixo' && respostas.Pergunta2 === 'amarelo' && respostas.Pergunta3 === 'casa'){
                    return musicasSugeridas.Musica12;
                } else if (respostas.Pergunta1 === 'está bem' && respostas.Pergunta2 === 'verde' && respostas.Pergunta3 === 'praia'){
                    return musicasSugeridas.Musica13;
                } else if (respostas.Pergunta1 === 'está bem' && respostas.Pergunta2 === 'verde' && respostas.Pergunta3 === 'parque'){
                    return musicasSugeridas.Musica14;
                } else if (respostas.Pergunta1 === 'está bem' && respostas.Pergunta2 === 'verde' && respostas.Pergunta3 === 'bosque'){
                    return musicasSugeridas.Musica15;
                } else if (respostas.Pergunta1 === 'está bem' && respostas.Pergunta2 === 'verde' && respostas.Pergunta3 === 'casa'){
                    return musicasSugeridas.Musica16;
                } else if (respostas.Pergunta1 === 'está bem' && respostas.Pergunta2 === 'azul' && respostas.Pergunta3 === 'praia'){
                    return musicasSugeridas.Musica17;
                } else if (respostas.Pergunta1 === 'está bem' && respostas.Pergunta2 === 'azul' && respostas.Pergunta3 === 'parque'){
                    return musicasSugeridas.Musica18;
                } else if (respostas.Pergunta1 === 'está bem' && respostas.Pergunta2 === 'azul' && respostas.Pergunta3 === 'bosque'){
                    return musicasSugeridas.Musica19;
                } else if (respostas.Pergunta1 === 'está bem' && respostas.Pergunta2 === 'azul' && respostas.Pergunta3 === 'casa'){
                    return musicasSugeridas.Musica20;
                } else if (respostas.Pergunta1 === 'está mais ou menos' && respostas.Pergunta2 === 'verde' && respostas.Pergunta3 === 'praia'){
                    return musicasSugeridas.Musica21;
                } else if (respostas.Pergunta1 === 'está mais ou menos' && respostas.Pergunta2 === 'verde' && respostas.Pergunta3 === 'parque'){
                    return musicasSugeridas.Musica22;
                } else if (respostas.Pergunta1 === 'está mais ou menos' && respostas.Pergunta2 === 'verde' && respostas.Pergunta3 === 'bosque'){
                    return musicasSugeridas.Musica23;
                } else if (respostas.Pergunta1 === 'está mais ou menos' && respostas.Pergunta2 === 'verde' && respostas.Pergunta3 === 'casa'){
                    return musicasSugeridas.Musica24;
                } else if (respostas.Pergunta1 === 'está mais ou menos' && respostas.Pergunta2 === 'azul' && respostas.Pergunta3 === 'praia'){
                    return musicasSugeridas.Musica25;
                } else if (respostas.Pergunta1 === 'está mais ou menos' && respostas.Pergunta2 === 'azul' && respostas.Pergunta3 === 'parque'){
                    return musicasSugeridas.Musica26;
                } else if (respostas.Pergunta1 === 'está mais ou menos' && respostas.Pergunta2 === 'azul' && respostas.Pergunta3 === 'bosque'){
                    return musicasSugeridas.Musica27;
                } else if (respostas.Pergunta1 === 'está mais ou menos' && respostas.Pergunta2 === 'azul' && respostas.Pergunta3 === 'casa'){
                    return musicasSugeridas.Musica28;
                } else if (respostas.Pergunta1 === 'está meio pra baixo' && respostas.Pergunta2 === 'verde' && respostas.Pergunta3 === 'praia'){
                    return musicasSugeridas.Musica29;
                } else if (respostas.Pergunta1 === 'está meio pra baixo' && respostas.Pergunta2 === 'verde' && respostas.Pergunta3 === 'parque'){
                    return musicasSugeridas.Musica30;
                } else if (respostas.Pergunta1 === 'está meio pra baixo' && respostas.Pergunta2 === 'verde' && respostas.Pergunta3 === 'bosque'){
                    return musicasSugeridas.Musica31;
                } else if (respostas.Pergunta1 === 'está meio pra baixo' && respostas.Pergunta2 === 'verde' && respostas.Pergunta3 === 'casa'){
                    return musicasSugeridas.Musica32;
                } else if (respostas.Pergunta1 === 'está meio pra baixo' && respostas.Pergunta2 === 'azul' && respostas.Pergunta3 === 'praia'){
                    return musicasSugeridas.Musica33;
                } else if (respostas.Pergunta1 === 'está meio pra baixo' && respostas.Pergunta2 === 'azul' && respostas.Pergunta3 === 'parque'){
                    return musicasSugeridas.Musica34;
                } else if (respostas.Pergunta1 === 'está meio pra baixo' && respostas.Pergunta2 === 'azul' && respostas.Pergunta3 === 'bosque'){
                    return musicasSugeridas.Musica35;
                } else if (respostas.Pergunta1 === 'está meio pra baixo' && respostas.Pergunta2 === 'azul' && respostas.Pergunta3 === 'casa'){
                    return musicasSugeridas.Musica36;
                }
        return 'Nenhuma sugestão';
    };    
    let musicaSugerida = sugestoesMusicas();        
    console.log(musicaSugerida);
    return(
        <>
            <main className="pergunta">
                <section className="sessao musicaSugerida">
                    <h1>Sua sugestão de música</h1>
                    <div className="geral musicaSugerida">
                        <img className="musica-imagem" src={'/assets/Trouble.jpg'} alt={musicaSugerida.titulo} />           
                        <h3 className="musica-titulo">{musicaSugerida.titulo} por {musicaSugerida.artista}</h3>
                        <Link className="musica-link" href={musicaSugerida.link}>Ouça aqui</Link>
                    </div>
                </section>
            </main>
        </>
        
     ); 
    /*
    return(
        <div>
          <h2>Sua sugestão de música:</h2>
          <div>
            <img src={musicaSugerida.imagem} alt={musicaSugerida.titulo} />
            <h3>{musicaSugerida.titulo} por {musicaSugerida.artista}</h3>
            <Link href={musicasSugeridas.link}>Ouça aqui</Link>
          </div>
        </div>
     ); 
     */   
};
  
export default Resultado;