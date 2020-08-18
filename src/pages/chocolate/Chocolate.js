import React, { useState } from 'react';
import GlobalStyle from '../../styles/global';
import { Container } from '../../components/container';
import { ChocolateForm } from './style';
import chocolateImg from '../../assets/images/chocolate.svg';
import api from '../../services/api';

function Chocolate() {
  const token = localStorage.getItem('@chocolate-front/token');

  if (!token) {
    window.location.href = '/login';
  }

  const formData = new FormData(); // Classe nativa do JavaScript que a gente chama para utlizar e colocamos em uma variavel para poder usar de forma mais fácil.

  const [infos, setInfos] = useState({
    marca: '',
    valor: '',
    nome: '',
  }); // Aqui só recebe strings, imgens já são vazia e são tratadas lá em cima no append, onde juntamos tudo.

  const onFormSubmit = async (e) => {
    e.preventDefault();

    Object.keys(infos).forEach((key) => formData.append(key, infos[key]));
    // Object é uma classe nativa que manipula o array dos objetos que vem de infos. Através das keys que puxa as chaves dos objetos e para cada chave (foreach) eu adicionao (append) ao formData com o formato de chave, valor, que já tem a imagem encaminhada anteriormente.
    //infos que objeto que estamos passando para o formData para enviar tudo junto para a API.

    const response = await api({
      method: 'post',
      url: '/chocolates',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    }); //Configura a chamada para a APi com o multipart formData, configurando ele pondo em formato de json. method:post, url (caminho da API, no meu caso /chocolates), os dados em data como tudo que veio do Object.keys e defino os headers como multipart formadata para a API reconhecer.

    if (response.status !== 201) {
      console.log(response);
      return alert('Houve um problema para cadastrar chocolate');
    }

    alert('Chocolate cadastrado com sucesso');

    window.location.href = '/'; // redireciona a página para a raiz ('/')
  };

  const handleImageChange = (e) => {
    const image = e.target.files[0]
    // image.size() - Dá pra verificar o tamanho, nome e outras tratativas mais ou menos assim
    formData.append('file', image);
  }; // Adicionao ao formData e adiciono nele o "file" que é a chava da requisição, e o valor é o arquivo de imagem (URL) na poisção [0] porque queremos só a primeira imagem.

  const handleInputChange = (e) => {
    setInfos({
      ...infos,
      [e.target.name]: e.target.value,
    });
  }; // Faz o que as outras fazem nas páginas anteriores

  return (
    <div className="App">
      <>
        <GlobalStyle />
        <Container>
          <img src={chocolateImg} alt="Logo barra de chocolate" />
          <h1>Chocolates</h1>
          <h2>Cadastrar chocolate</h2>

          <ChocolateForm onSubmit={onFormSubmit}>
            <input
              type="text"
              name="brand"
              placeholder="Digite a marca"
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="price"
              placeholder="Digite o valor"
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="name"
              placeholder="Digite o nome"
              onChange={handleInputChange}
            />

            <input type="file" name="file" onChange={handleImageChange} />

            <button type="submit">Cadastrar</button>
          </ChocolateForm>
        </Container>
      </>
    </div>
  );
}

export default Chocolate;
