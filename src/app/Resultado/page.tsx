import Image from "next/image";
import Link from "next/link";

const Resultado = () => {
            if (respostas.Perguntas1 === 'opcao1' && respostas.Perguntas2 === 'opcao1' && respostas.Perguntas3 === 'opcao1'){
                return 'Musica1';
            } else if (respostas.Perguntas1 === 'opcao1' && respostas.Perguntas2 === 'opcao1' && respostas.Perguntas3 === 'opcao2'){
                return 'Musica2';
            } else if (respostas.Perguntas1 === 'opcao1' && respostas.Perguntas2 === 'opcao1' && respostas.Perguntas3 === 'opcao3'){
                return 'Musica3';
            } else if (respostas.Perguntas1 === 'opcao1' && respostas.Perguntas2 === 'opcao1' && respostas.Perguntas3 === 'opcao4'){
                return 'Musica4';
            } else if (respostas.Perguntas === 'opcao2' && respostas.Perguntas2 === 'opcao1' && respostas.Perguntas3 === 'opcao1'){
                return 'Musica5';
            } else if (respostas.Perguntas1 === 'opcao2' && respostas.Perguntas2 === 'opcao1' && respostas.Perguntas3 === 'opcao2'){
                return 'Musica6';
            } else if (respostas.Perguntas1 === 'opcao2' && respostas.Perguntas2 === 'opcao1' && respostas.Perguntas3 === 'opcao3'){
                return 'Musica7';
            } else if (respostas.Perguntas1 === 'opcao2' && respostas.Perguntas2 === 'opcao1' && respostas.Perguntas3 === 'opcao4'){
                return 'Musica8';
            } else if (respostas.Perguntas3 === 'opcao3' && respostas.Perguntas2 === 'opcao1' && respostas.Perguntas3 === 'opcao1'){
                return 'Musica9';
            } else if (respostas.Perguntas1 === 'opcao3' && respostas.Perguntas2 === 'opcao1' && respostas.Perguntas3 === 'opcao2'){
                return 'Musica10';
            } else if (respostas.Perguntas1 === 'opcao3' && respostas.Perguntas2 === 'opcao1' && respostas.Perguntas3 === 'opcao3'){
                return 'Musica11';
            } else if (respostas.Perguntas1 === 'opcao3' && respostas.Perguntas2 === 'opcao1' && respostas.Perguntas3 === 'opcao4'){
                return 'Musica12';
            } else if (respostas.Perguntas1 === 'opcao1' && respostas.Perguntas2 === 'opcao2' && respostas.Perguntas3 === 'opcao1'){
                return 'Musica13';
            } else if (respostas.Perguntas1 === 'opcao1' && respostas.Perguntas2 === 'opcao2' && respostas.Perguntas3 === 'opcao2'){
                return 'Musica14';
            } else if (respostas.Perguntas1 === 'opcao1' && respostas.Perguntas2 === 'opcao2' && respostas.Perguntas3 === 'opcao3'){
                return 'Musica15';
            } else if (respostas.Perguntas1 === 'opcao1' && respostas.Perguntas2 === 'opcao2' && respostas.Perguntas3 === 'opcao4'){
                return 'Musica16';
            } else if (respostas.Perguntas1 === 'opcao1' && respostas.Perguntas2 === 'opcao3' && respostas.Perguntas3 === 'opcao1'){
                return 'Musica17';
            } else if (respostas.Perguntas1 === 'opcao1' && respostas.Perguntas2 === 'opcao3' && respostas.Perguntas3 === 'opcao2'){
                return 'Musica18';
            } else if (respostas.Perguntas1 === 'opcao1' && respostas.Perguntas2 === 'opcao3' && respostas.Perguntas3 === 'opcao3'){
                return 'Musica19';
            } else if (respostas.Perguntas1 === 'opcao1' && respostas.Perguntas2 === 'opcao3' && respostas.Perguntas3 === 'opcao4'){
                return 'Musica20';
            } else if (respostas.Perguntas1 === 'opcao2' && respostas.Perguntas2 === 'opcao2' && respostas.Perguntas3 === 'opcao1'){
                return 'Musica21';
            } else if (respostas.Perguntas1 === 'opcao2' && respostas.Perguntas2 === 'opcao2' && respostas.Perguntas3 === 'opcao2'){
                return 'Musica22';
            } else if (respostas.Perguntas1 === 'opcao2' && respostas.Perguntas2 === 'opcao2' && respostas.Perguntas3 === 'opcao3'){
                return 'Musica23';
            } else if (respostas.Perguntas1 === 'opcao2' && respostas.Perguntas2 === 'opcao2' && respostas.Perguntas3 === 'opcao4'){
                return 'Musica24';
            } else if (respostas.Perguntas1 === 'opcao2' && respostas.Perguntas2 === 'opcao3' && respostas.Perguntas3 === 'opcao1'){
                return 'Musica25';
            } else if (respostas.Perguntas1 === 'opcao2' && respostas.Perguntas2 === 'opcao3' && respostas.Perguntas3 === 'opcao2'){
                return 'Musica26';
            } else if (respostas.Perguntas1 === 'opcao2' && respostas.Perguntas2 === 'opcao3' && respostas.Perguntas3 === 'opcao3'){
                return 'Musica27';
            } else if (respostas.Perguntas1 === 'opcao2' && respostas.Perguntas2 === 'opcao3' && respostas.Perguntas3 === 'opcao4'){
                return 'Musica28';
            } else if (respostas.Perguntas1 === 'opcao3' && respostas.Perguntas2 === 'opcao2' && respostas.Perguntas3 === 'opcao1'){
                return 'Musica29';
            } else if (respostas.Perguntas1 === 'opcao3' && respostas.Perguntas2 === 'opcao2' && respostas.Perguntas3 === 'opcao2'){
                return 'Musica30';
            } else if (respostas.Perguntas1 === 'opcao3' && respostas.Perguntas2 === 'opcao2' && respostas.Perguntas3 === 'opcao3'){
                return 'Musica31';
            } else if (respostas.Perguntas1 === 'opcao3' && respostas.Perguntas2 === 'opcao2' && respostas.Perguntas3 === 'opcao4'){
                return 'Musica32';
            } else if (respostas.Perguntas1 === 'opcao3' && respostas.Perguntas2 === 'opcao3' && respostas.Perguntas3 === 'opcao1'){
                return 'Musica33';
            } else if (respostas.Perguntas1 === 'opcao3' && respostas.Perguntas2 === 'opcao3' && respostas.Perguntas3 === 'opcao2'){
                return 'Musica34';
            } else if (respostas.Perguntas1 === 'opcao3' && respostas.Perguntas2 === 'opcao3' && respostas.Perguntas3 === 'opcao3'){
                return 'Musica35';
            } else if (respostas.Perguntas1 === 'opcao3' && respostas.Perguntas2 === 'opcao3' && respostas.Perguntas3 === 'opcao4'){
                return 'Musica36';
            }
            
         return(
            <div>
                <h2>Sua sugestão de música:</h2>
                <p>{suggestMusic()}</p>
            </div>
    )
  }
  export default Resultado;