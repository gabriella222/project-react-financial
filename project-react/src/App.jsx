import React, { useEffect } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import FormAdicao from './components/FormAdicao/FormAdicao'
import Table from './components/Table/Table'
import Soma from './components/Soma/Soma'
import Produto from '../testing/contexts/Produto'
import { GlobalContext } from '../testing/contexts/Context'
import { ContextList } from './context/ContextList'

function App() {

  //Setando os estados
  const [dataC, setDataC] = React.useState('');
  const [item, setItem] = React.useState('');
  const [tipoGasto, setTipoGasto] = React.useState('');
  const [valor, setValor] = React.useState('');
  const [msgE,  setMsgE] = React.useState('');

  let id = 1;
  let newObjInfo;

  const cont = React.useContext(ContextList)


  useEffect(()=>{ 
    let recup = localStorage.getItem('financial') 
    if(recup){
      recup = JSON.parse(recup)
      cont.setObjetoInfo(recup)
    }
  },[])
  
  
  const handleSubmit = (event)=>{
    event.preventDefault();

    if(dataC === ""){
      setMsgE("Preencha a data!")
      return false
    }

    if(item === ""){
      setMsgE("Preencha o título!")
      console.log(msgE)
      return false
    }
    if(tipoGasto === ""){
      setMsgE("Preencha o tipo de gasto!")
      return false
    }
    if(valor === ""){
      setMsgE("Preencha o valor!")
      console.log(msgE)
      return false
    }
    
    newObjInfo = {
      "id": Date.now(),
      "data": dataC,
      "item": item,
      "tipoGasto": tipoGasto,
      "valor": valor
    }
 
    setMsgE("")
      
    const arrayObj = [...cont.objetoInfo, newObjInfo]
    cont.setObjetoInfo(arrayObj)

    localStorage.setItem('financial',JSON.stringify(arrayObj))

    console.log(cont.objetoInfo)
  }

  return(

    <>

    <ContextList>
      <Header />

      <div className='container'>
        <FormAdicao 
          handleSubmit={handleSubmit} 

          setDataC={setDataC} 
          setItem={setItem} 
          setTipoGasto={setTipoGasto} 
          setValor={setValor}

          dataC={dataC}
          item={item}
          tipoGasto={tipoGasto}
          valor={valor}

          msgE={msgE}
          setMsgE={setMsgE}
          
         />
         { msgE != '' &&  <p className='errorMessage'>{msgE}</p> }
         {/* {cont.objetoInfo.length > 0 ? <Table setObjetoInfo={cont.setObjetoInfo} objetoInfo={cont.objetoInfo}/>  : <p className='title-not-items'>Não há itens para serem exibidos</p>} */}

       
        <Soma />
        </div>
       <Footer/>
      {/* <GlobalContext>
          <Produto />
      </GlobalContext>  -> Exemplo do uso do useContext*/}
    </ContextList>
    </>

  )
}

export default App
