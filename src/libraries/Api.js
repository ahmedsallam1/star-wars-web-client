import axios from 'axios';
import config from '../../env'

export default axios.create({
    baseURL: config.BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    withCredentials: false
});