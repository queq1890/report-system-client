import axios from 'axios';
import checkStatus from 'utils/requests';

export const getUserAPI = () => axios.get('https://api.github.com/users/queq1890').then(checkStatus);
