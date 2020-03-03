import axios from 'axios'
const http = axios.create({
  baseURL: 'http://localhost:3000/ly/api',
});

export default http;