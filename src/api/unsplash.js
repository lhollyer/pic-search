import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID 73aad7baf77a68fcae31819e43528810cc85665edeadea44dbe5fb3dc75cd809'
  }
});
