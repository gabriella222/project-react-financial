import React from 'react'
import './Soma.css'
import { ContextList } from '../../context/ContextList'


const cont = React.useContext(ContextList)

function Soma() {
  const result = cont.objetoInfo.reduce((acc, obj)=>(
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
