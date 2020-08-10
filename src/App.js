import React, {useState,useEffect} from 'react';
import GlobalStyle from './styles/global';
import {Container, ChocolateList} from './styles/style';
import ChocolateImg from './assets/images/chocolate.svg';
import api from './services/api';


function App(){

  const [infos, setInfos] = useState([]);//[0,1] 0  Traz as informações da API, 1 - Altera as informações da API

  useEffect(()=>{
    async function loadInfos(){
      const response = await api.get('/chocolates');
      setInfos(response.data);
    };
    loadInfos();
  }, []);//Chama a API através dos verbos HTTP e insere os dados solicitados através da response.data e depois carrega os dados através da loadInfos() para o componente.

  return (
   <div className = "App">
      <>
        <GlobalStyle/>
        <Container>
          <img src={ChocolateImg} alt ="Logo barra de chocolate"/>
          <h1>Teste</h1>
          <ChocolateList>
            {infos.map((info) =>(
              <li key = {info._id} >
                <div>
                  <img src={info.image} alt = "Imagem do chocolate"/>
                  <div>
                    <h2>{info.name}</h2>
                    <p>{info.brand}</p>
                    <p> R$ {info.price}</p>
                  </div>
                </div>
              </li>
            ))};
          </ChocolateList>
        </Container>
      </>
   </div>
  );
}

export default App;

//Neste arquivo é que criamos os componentes que serão exportados para o index.js que serão posteriormente injetados no index.html.
