import React from 'react';

export const ContextList = React.createContext();

export const GlobalContext =  ({ children }) =>{

    const [objetoInfo, setObjetoInfo] = React.useState([]);

    return(
        <ContextList.Provider value={{objetoInfo, setObjetoInfo}}>
            { children }
        </ContextList.Provider>
    )
}