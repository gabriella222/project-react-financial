import React from 'react'
import  './Table.css'
import  { Trash2 } from 'lucide-react';

function Table({objetoInfo, setObjetoInfo}) {

  const handleDelete = (index) =>{
    console.log('click!')
    // const deleteItem = objetoInfo.splice (0, index)
    let deletedItem = objetoInfo.filter((_,i)=> i !== index )
    //Entender essa parte novamente.
    localStorage.setItem('financial',JSON.stringify(deletedItem))
    setObjetoInfo(deletedItem);

  }

  return (

    <>
     <div  className='header'>
        <table>
           <thead>
                <tr className='cabecalho title'>
                    <th>Data</th>
                    <th>Título</th>
                    <th>Tipo de Gasto</th>
                    <th>Valor</th>
                    <th>Apagar</th>
                </tr>
            </thead> 
            <tbody>
              {
                objetoInfo.map((ob,index)=>( 
            
                  <tr key={ob.id} className='cabecalho cc'>
                      <td>{ob.data}</td>
                      <td>{ob.item}</td>
                      <td>{ob.tipoGasto}</td>
                      <td>R$ {ob.valor}</td>
                      <td title='Clique para deletar o item adicionado' className='delete' onClick={()=>handleDelete(index)}><Trash2 /></td>
                  </tr>
                  ))
            }
            
            </tbody>
          
                    
        </table>

         
         </div>
    </>
  )
}

export default Table
