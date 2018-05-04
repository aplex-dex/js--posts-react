import axios from 'axios';

export const getAllUsers = () =>
  axios('https://jsonplaceholder.typicode.com/users');
