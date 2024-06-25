import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import FormAdicao from './components/FormAdicao/FormAdicao'
import Table from './components/Table/Table'
import Soma from './components/Soma/Soma'

function App() {

  //Setando os estados
  const [dataC, setDataC] = React.useState();
  const [item, setItem] = React.useState();
  const [tipoGasto, setTipoGasto] = React.useState();
  const [valor, setValor] = React.useState();

  const handleSubmit = (event)=>{
    event.preventDefault();
    //console.log('Enviei')
    console.log( dataC,item,tipoGasto,valor )
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
         
         />
        <Table/>
        <Soma/>
      <Footer/>
    </>

  )
}

export default App
