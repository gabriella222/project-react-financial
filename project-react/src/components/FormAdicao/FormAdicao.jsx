import React from 'react'
import './FormAdd.css'

export  default function FormAdicao({...props}) {
  return (
   <>
    <form action="submit" className='formulario'>

    <div>
      <label htmlFor="">
        Data da compra
      </label>     
      <input 
         type="date" 
         value={props.dataC}
         onChange={(event)=>{props.setDataC(event.target.value)}}
         pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))"
         />  
    </div>
      
      <div>
          <label htmlFor="">
            Título
          </label>
          <input 
             type="text"
             value={props.item}
             onChange={
              (event)=>{props.setItem(event.target.value)}}
             required
            />
         
      </div>
      <div>
          <label htmlFor="">
            Tipo de gasto
          </label>
          <select 
              name="Selecione uma opção"
              value={props.tipoGasto}
              // defaultValue="op1"
              onChange={(event)=>{props.setTipoGasto(event.target.value)}}
            
              >
              <option>Selecione uma opção</option>
              <option value="Alimentação">Alimentação</option>
              <option value="Despesas Mensais">Despesas Mensais</option>
              <option value="Outros">Outros</option>
            </select>
      </div>

     <div>
          <label htmlFor="">
            Valor
          </label>
          <input 
             required
             type="number"
             step='any'
             value={props.valor}
             onChange={
                (event)=>{
                  props.setValor(event.target.value)
              }
            }
             
             />
          
      </div>
      
      <button className='btn' onClick={props.handleSubmit}>Inserir</button>
      
     
    </form>
   </>
  )
}


