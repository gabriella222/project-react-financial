import React from 'react'
import { Contexto }  from  './Context'


function Produto() {

    {/** Preciso usar meu contexto -> Chamando 'Context' */}
    const meuCont = React.useContext(Contexto)

    return (
    <div>
      <p>Esses são os meus produtos. O comprador é {meuCont}</p>
    </div>
  )
}

export default Produto
