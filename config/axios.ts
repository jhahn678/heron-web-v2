import Axios from 'axios'
import { Tokens } from '../types/LocalStorage';
import { getFromLocalStorage } from '../utils/localStorage/getFromLocalStorage';

const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
        Authorization: `Bearer ${getFromLocalStorage(Tokens.accessToken)}`
    }
});

export default axios;