import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-app-29607.firebaseio.com/'
});

export default instance;