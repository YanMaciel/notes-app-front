import axios from 'axios';

const api = axios.create({
  baseURL: 'https://notesapp-api-app.herokuapp.com/',
});

export default api;
