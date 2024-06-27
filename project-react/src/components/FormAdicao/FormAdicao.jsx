import React from 'react'

export  default function FormAdicao({handleSubmit, setDataC, setItem, setTipoGasto, setValor, dataC, item, tipoGasto, valor,setMsgE,msgE}) {
  return (
   <>
    <form action="submit">

    <div>
      <label htmlFor="">
        Data da compra
        <input 
         type="date" 
         value={dataC}
         onChange={(event)=>{setDataC(event.target.value)}}
         required
         />  
      </label>     
    </div>
      
      <div>
          <label htmlFor="">
            Item
            <input 
             type="text"
             value={item}
             onChange={
              (event)=>{setItem(event.target.value)}}
             required
            />
          </label>
         
      </div>
      <div>
          <label htmlFor="">
            Tipo de gasto
            <select 
              name="Selecione uma opção"
              value={tipoGasto}
              // defaultValue="op1"
              onChange={(event)=>{setTipoGasto(event.target.value)}}
            
              >
              <option>Selecione uma opção</option>
              <option value="op1">op1</option>
              <option value="op2">op2</option>
              <option value="op3">op3</option>
            </select>
          </label>
      </div>

     <div>
          <label htmlFor="">
            Valor
            <input 
             required
             type="number"
             step='any'
             value={valor}
             onChange={
                (event)=>{
                 setValor(event.target.value)
              }
            }
             
             />
          </label>
          { msgE != '' &&  <p>{msgE}</p> }
      </div>
      
      <button onClick={handleSubmit}>Inserir</button>
      
     
    </form>
   </>
  )
}


