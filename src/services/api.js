import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

api.interceptors.response.use(
  (res) => {
    return res;
  }, //.response é o momento de intercepção. .use() é uma função que recupera toda a resposta antes de ir para frente. Retorna a resposta pois só quero usar se for 401 e se (401)
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem('@chocolate-front/token');
      window.location.href = '/login';
    }
  } //executa esta aqui debaixo. Se for 401, token inválido eu removo o token do local storage por expiração da validade, e qualquer página manda pro login de novo.
);// Interceptor - Toda vez que fazemos uma requisição, antes de terminar podemos fazer validações. Esse é para a resposta.

api.interceptors.request.use(async (req) => {
  const token = localStorage.getItem('@chocolate-front/token'); //Resgata o valor do token do local storage
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  } //Se tiver um token, o header da requisição vai recerber Authorization e recebe o token, para liberar os acessos do token.
  return req; //Retorna a requisição com o token valido epermite a API a fazer a comparação com o token saldo, senão encaminha para o login de novo.
});

export default api;

//Interceptors são parecidos com os middlewares, só que para o axios que gerar as configuração de conexões.
