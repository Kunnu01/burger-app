import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-app-38a89.firebaseio.com/'
});

export default instance;