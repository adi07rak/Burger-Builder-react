import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://react-temp-8a06e.firebaseio.com/'
});

export default instance;