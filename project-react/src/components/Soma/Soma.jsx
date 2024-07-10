import React from 'react'
import './Soma.css'

function Soma({objetoInfo}) {
  const result = objetoInfo.reduce((acc, obj)=>(
     acc + Number(obj.valor)
  ),0)
  
  if(!result) return
  return (

    <>
      <div className='soma'>
         <p>Total gasto: R$ {result}</p>
      </div>
      
    </>
   
    
  )

}

export default Soma
