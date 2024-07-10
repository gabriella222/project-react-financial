import React from 'react'

export const Contexto = React.createContext();
 
//Preciso de um Provider para passar as minhas informações
//Na forma abaixo, vou fazer uma função retornar o provider

export const GlobalContext = ({children})=>{

    
    {/** O children vai abranger todos itens filtros que forem entre o contexto e irão receber os valores */}
    {/** VALUE -> valores que serão compartilhados entre os componentes */}
    {/** Retornando meu provider */}
    return(
        <Contexto.Provider value={{nome: "Gaby"}}>{children}</Contexto.Provider>
    )
}
