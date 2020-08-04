import axios from 'axios';

const api = axios.create({

  //baseURL:'http://localhost:3000'
  baseURL:'https://jsonplaceholder.typicode.com/'

});
export default api;
