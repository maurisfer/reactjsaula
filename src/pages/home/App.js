import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GlobalStyle from '../../styles/global';
import { ChocolateList, ButtonLink } from './style';
import { Container } from '../../components/container';
import chocolateImg from '../../assets/images/chocolate.svg';
import api from '../../services/api';

function App() {
  const token = localStorage.getItem('@chocolate-front/token'); //Recupe o token do local Storage (Pode ser componetizada)

  if (!token) {
    window.location.href = '/login';
  } //Se null, redireciona para login

  const [infos, setInfos] = useState([]); //Recebe um array vazio de inicio e monitora o estado do componente para alterá-lo dinamicamente
  //Dentro dos parenteses do useState (aqui vai o tipo de dado, [] ou {}, ou o que vai entrar do estado do componente, como por exemplo pass:"", email:"")

  useEffect(() => {
    async function loadInfos() {
      const response = await api.get('/chocolates'); //Faz a requisição e pega os dados solicitados da API, conforme routes.js

      setInfos(response.data.chocolate); //Passa para o setInfos os dados solicitados da api. Serão recupeados abaixo, conforme cada item pede.
    }
    loadInfos();
  }, []);

  return (
    <div className="App">
      <>
        <GlobalStyle />
        <Container>
          <img src={chocolateImg} alt="Logo barra de chocolate" />
          <h1>Chocolates</h1>
          <ButtonLink type="button">
            <Link to="/create">Cadastrar usuário</Link>
          </ButtonLink>
          <ButtonLink>
            <Link to="/chocolate">Cadastrar chocolate</Link>
          </ButtonLink>

          <ChocolateList>
            {infos.map((info) => (
              <li key={info._id}>
                <div>
                  <img src={info.image} alt="Imagem do chocolate" />
                  <div>
                    <h2>{info.name}</h2>
                    <p>{info.brand}</p>
                    <p> R$ {info.price}</p>
                  </div>
                </div>
              </li>
            ))}
          </ChocolateList>
        </Container>
      </>
    </div>
  );
}

export default App;
