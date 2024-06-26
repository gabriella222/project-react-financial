import React from 'react'

function Table({objetoInfo}) {
  return (

    <>
     <div>
        <table>
           <thead>
                <tr>
                    <th>Data</th>
                    <th>Item</th>
                    <th>Tipo de Gasto</th>
                    <th>Valor</th>
                </tr>
            </thead> 
            <tbody>
           {objetoInfo.map((ob,index)=>( 
           
                    <tr key={index}>
                        <td>{ob.data}</td>
                        <td>{ob.item}</td>
                        <td>{ob.tipoGasto}</td>
                        <td>{ob.valor}</td>
                    </tr>
            ))}
            </tbody>
          
                    
        </table>

         
         </div>
    </>
  )
}

export default Table
