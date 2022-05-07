import axios from 'axios';

export default axios.create({
    baseURL: 'https://counselapi.herokuapp.com/rest-auth/login/'
});