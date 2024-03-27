"use client"
import Pergunta1 from "@/app/Pergunta1/page";
import Pergunta2 from "@/app/Pergunta2/page";
import Pergunta3 from "@/app/Pergunta3/page";
import Resultado from "@/app/Resultado/page";
import React, { useState } from "react";


const App = () => {
    const [respostas, setRespostas] = useState({
       Pergunta1: '',
       Pergunta2: '',
       Pergunta3: '',
    });
    
    const handleRespostaChange = (pergunta: string, resposta: string) => {                
        setRespostas(prevRespostas => ({
        ...prevRespostas, [pergunta]: resposta,
        }));                
    };
    
    return (        
        <div>
            {respostas.Pergunta1 === '' ? (
                <Pergunta1 saveRespostaHandler = { handleRespostaChange } />
            ) : respostas.Pergunta2 === '' ? (
                <Pergunta2 saveRespostaHandler = { handleRespostaChange } />
            ) : respostas.Pergunta3 === '' ? (
                <Pergunta3 saveRespostaHandler = { handleRespostaChange } />
            ) : (
                <Resultado respostas = { respostas } />
            )}
        </div>
    );
};
export default App;