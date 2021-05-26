import axios from 'axios';


const clienteAxios = axios.create({
    baseURL: 'https://superheroapi.com/api.php/'
});

export default clienteAxios;