import React from 'react'
import  './Table.css'

function Table({objetoInfo}) {
  return (

    <>
     <div  className='header'>
        <table>
           <thead>
                <tr className='cabecalho title'>
                    <th>Data</th>
                    <th>Item</th>
                    <th>Tipo de Gasto</th>
                    <th>Valor</th>
                </tr>
            </thead> 
            <tbody>
           {objetoInfo.map((ob,index)=>( 
           
                    <tr key={index} className='cabecalho cc'>
                        <td>{ob.data}</td>
                        <td>{ob.item}</td>
                        <td>{ob.tipoGasto}</td>
                        <td>R$ {ob.valor}</td>
                    </tr>
            ))}
            </tbody>
          
                    
        </table>

         
         </div>
    </>
  )
}

export default Table
