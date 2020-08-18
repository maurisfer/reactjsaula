import React, { useState } from 'react';
import GlobalStyle from '../../styles/global';
import { Link } from 'react-router-dom'
import { Container } from '../../components/container';
import { ChocolateForm } from './style';
import chocolateImg from '../../assets/images/chocolate.svg';
import api from '../../services/api';

function Create() {
  const token = localStorage.getItem('@chocolate-front/token'); // Salva o jwt em localstorege se houver token, senão será encaminhado pra login, conforme if abaixo:

  if (token) {
    window.location.href = '/'; //Se houver token será redirecionado para home ('/')
  }

  const [infos, setInfos] = useState({
    email: '',
    password: '',
  }); // Inicia o componente vazio e define o que espera receber dos inputs, pois monitora o estado do componente

  const onFormSubmit = async (e) => {
    e.preventDefault(); // Evita o carregamento de página

    const { email, password: pass } = infos; // Pega as informações que são passadas para o useState, depois passa para infosToApi as variaveis email e pass

    const infosToApi = {
      email,
      pass,
    }; //Objeto que será enviado para API, que consome infos.

    const response = await api.post('/login', infosToApi); //Envia o JSon com os dados do infosToAPI para a rota post e recebe o token
    console.log(response);

    if (response.status !== 200) {
      console.log(response);
      return alert('Houve um erro ao autenticar usuário');
    } // Verifica se o login ocorreu pela geração do token

    localStorage.setItem('@chocolate-front/token', response.data.token); // Recebe o token do response da API

    alert('Usuário autenticado com sucesso');

    window.location.href = '/'; // redireciona a página para login ('/')
  }; // Função do submit do formlário de login

  const handleInputChange = (e) => {
    setInfos({
      ...infos,
      [e.target.name]: e.target.value,
    });
  }; // Acumulas as informações nas alterações dos inputs e define o setInfos que vai passar as informações para o useState

  return (
    <div className="App">
      <>
        <GlobalStyle />
        <Container>
          <img src={chocolateImg} alt="Logo barra de chocolate" />
          <h1>Chocolates</h1>

          <ChocolateForm onSubmit={onFormSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
              onChange={handleInputChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Digite sua senha"
              onChange={handleInputChange}
            />
            <button type="submit">Login</button>
          </ChocolateForm>
          <Link to = '/create'><button type="submit">Cadastre-se</button></Link>
        </Container>
      </>
    </div>
  );
}

export default Create;
