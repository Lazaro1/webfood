import axios from 'axios';

//const baseURL = 'http://localhost:3333';
const baseURL = 'https://webfood-api.herokuapp.com';

const api = axios.create({
  baseURL: baseURL,
})

export default api;