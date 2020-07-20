import axios from 'axios';

export const getShops = () => {
    return axios.get('https://my-json-server.typicode.com/rachit-mittal/fake-json-server/data')
};