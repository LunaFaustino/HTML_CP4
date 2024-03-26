import { createContext, useContext, useState } from "react";

const ContextoMusica = createContext();

export function MusicaProvider({ children }) {
 const [respostas, setRespostas] = useState({
    Pergunta1: "",
    Pergunta2: "",
    Pergunta3: "",
 });

 return (
    <ContextoMusica.Provider value={{ respostas, setRespostas }}>
      {children}
    </ContextoMusica.Provider>
 );
}

export function useMusicaContext() {
 return useContext(ContextoMusica);
}