import axios from 'axios'
import { Tokens } from '../types/LocalStorage';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(Tokens.accessToken)}`

export default axios