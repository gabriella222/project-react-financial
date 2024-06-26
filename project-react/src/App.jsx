import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import FormAdicao from './components/FormAdicao/FormAdicao'
import Table from './components/Table/Table'
import Soma from './components/Soma/Soma'

function App() {

  //Setando os estados
  const [dataC, setDataC] = React.useState('');
  const [item, setItem] = React.useState('');
  const [tipoGasto, setTipoGasto] = React.useState('');
  const [valor, setValor] = React.useState('');
  const [objetoInfo, setObjetoInfo] = React.useState([]);
  const [msgE,  setMsgE] = React.useState();

  let id = 1;
  let newObjInfo;

  const handleSubmit = (event)=>{
    event.preventDefault();


    newObjInfo = {
      "data": dataC,
      "item": item,
      "tipoGasto": tipoGasto,
      "valor": valor
    }

    if(item === ""){
      setMsgE("Preencha o nome do item!")
      return false
    }
    if(valor === ""){
      setMsgE("Preencha o valor!")
      return false
    }
  
    setMsgE("")
  
    const arrayObj = [...objetoInfo, newObjInfo]
    setObjetoInfo(arrayObj)

    console.log(objetoInfo)
  }


  return(

    <>
      <Header />
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
        <Table objetoInfo={objetoInfo}/>
        <Soma  objetoInfo={objetoInfo}/>
      <Footer/>
    </>

  )
}

export default App
