import React, { useState } from 'react';
import GlobalStyle from '../../styles/global';
import { Container } from '../../components/container';
import { ChocolateForm } from './style';
import chocolateImg from '../../assets/images/chocolate.svg';
import api from '../../services/api';

function Create() {
  // const token = localStorage.getItem('@chocolate-front/token'); //Verifica se há um token no localstorage e passa para o if abaixo

  // if (!token) {
  //   window.location.href = '/login';
  // } //Se tiver um token ok, senão reencaminha para login

  const [infos, setInfos] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password: pass, confirmPassword } = infos; // Recebe os dados do useState

    if (pass !== confirmPassword) {
      return alert('As senhas digitadas não conferem');
    }

    const infosToApi = {
      name,
      email,
      pass,
    }; // Recebe os dados passado pela desestruturação acima

    const response = await api.post('/users', infosToApi); //Faz o post para api com os dados do infosToApi e engloba a resposta
    console.log(response);

    if (response.status !== 201) {
      console.log(response);
      return alert('Houve um erro ao criar o usuário');
    } //Verifica se o creste do usuário tiver erro

    alert('Usuário criado com sucesso');

    //Da pra fazer um login com os dados da API igual a da página de login ao invés de obrigar o usuário a fazer o login bem nesta linha junto com o localstorage
    //Login automatico
    //const loginResponse = await api.pos('/login', {email, pass});
    //if (loginResponse === 200){
    //  localStorage.setItem('@chocolate-front/token')
    //}

    window.location.href = '/'; // redireciona a página para ('/')
  };

  const handleInputChange = (e) => {
    setInfos({
      ...infos,
      [e.target.name]: e.target.value,
    });
  }; // Acumula os dadosmdos inputs

  return (
    <div className="App">
      <>
        <GlobalStyle />
        <Container>
          <img src={chocolateImg} alt="Logo barra de chocolate" />
          <h1>Cadastro</h1>

          <ChocolateForm onSubmit={onFormSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="name"
              placeholder="Digite seu nome"
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Digite sua senha"
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirme sua senha"
              onChange={handleInputChange}
            />

            <button type="submit">Cadastrar</button>
          </ChocolateForm>
        </Container>
      </>
    </div>
  );
}

export default Create;
