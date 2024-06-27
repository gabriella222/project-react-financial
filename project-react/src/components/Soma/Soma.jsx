import React from 'react'

function Soma({objetoInfo}) {
  const result = objetoInfo.reduce((acc, obj)=>(
     acc + Number(obj.valor)
  ),0)
  
  return (

    <>
     <p>Total gasto: {result}</p>
    </>
    
  )

}

export default Soma
