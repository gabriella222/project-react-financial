import React from 'react'

function FormAdicao({handleSubmit, setDataC, setItem, setIipoGasto, setValor, dataC, item, tipoGasto, valor}) {
  return (
   <>
    <form action="submit">

    <div>
      <label htmlFor="">
        Data da compra
        <input 
         type="Date" 
         value={dataC}
         onChange={(event)=>{setDataC(event.target.value)}}
         />  
      </label>     
    </div>
      
      <div>
          <label htmlFor="">
            Item
            <input 
             type="text"
             value={item}
             onChange={(event)=>{setItem(event.target.value)}}
            />
          </label>
      </div>
      <div>
          <label htmlFor="">
            Tipo de gasto
            <select 
              name="" 
              id=""
              value={tipoGasto}
              onChange={(event)=>{setIipoGasto(event.target.value)}}
              >
              <option value="">Opção 1</option>
              <option value="">Opção 2</option>
              <option value="">Opção 3</option>
            </select>
          </label>
      </div>

     <div>
          <label htmlFor="">
            Valor
            <input 
             type="text"
             value={valor}
             onChange={(event)=>{setValor(event.target.value)}}
             />
          </label>
      </div>
      
      <button onClick={handleSubmit}>Inserir</button>
      
     
    </form>
   </>
  )
}

export default FormAdicao
