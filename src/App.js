import React from 'react';
import GlobalStyle from './styles/global';
import {Container, ChocolateList} from './styles/style';


function App(){
  return (
   <div className = "App">
      <>
        <GlobalStyle/>
        <Container>
          <h1>Teste</h1>
          <ChocolateList>
            <li>AAAA</li>
            <li>AAAA</li>
            <li>AAAA</li>
            <li>AAAA</li>
          </ChocolateList>
        </Container>
      </>
   </div>
  );
}

export default App;

//Neste arquivo é que criamos os componentes que serão exportados para o index.js que serão posteriormente injetados no index.html.
