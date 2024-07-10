import React from 'react'
import { GlobalContext } from './Context'

function Render() {

    {/** Aqui vou chamar meu provider -> GlobalContext */}

  return (
      <GlobalContext>
          <Produto />
      </GlobalContext>
    )
}

export default Render
