import React, {useState, useEffect, Fragment} from 'react';
import GlobalStyle from '../../styles/global';
import { Container, LoginForm } from './style'
import api from '../../services/api';

function Login(){

  async function onFormSubmit(e){
    e.preventDefault;
    const { token } = dados;

    if (!token){
      alert('Não existe token')
    };
  }

  const handleInputChanges = (e) =>{
    setDados({
      ...dados,
      [e.target.name]:e.target.value,
    })
  }

  const [dados, setDados] = useState({email:"", pass: ""});

  useEffect(()=>{
    async function loadDados(){
      const response = await api.post('/login');
      setDados(response.data.token);
    };
    loadDados();
  }, []);

  return(
    <div className = "Login">
      <GlobalStyle/>
      <>
        <Container>
            <Fragment>
              <LoginForm>
                <form onSubmit = {onFormSubmit}>
                  <input
                    placeholder = "E-mail"
                    type = "text"
                    name = "email"
                    onChange = {handleInputChanges}
                  />
                  <input
                    placeholder = "Senha"
                    type = "password"
                    name = "pass"
                    onChange = {handleInputChanges}
                  />
                  <input type = "submit" value = "Entrar"/>
                </form>
              </LoginForm>
            </Fragment>
        </Container>
      </>
    </div>
  )
};

export default Login;
