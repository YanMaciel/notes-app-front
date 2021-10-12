import axios from 'axios';

const api = axios.create({
  baseURL: 'http://notesapi.ecdb.com.br/',
});

export default api;
