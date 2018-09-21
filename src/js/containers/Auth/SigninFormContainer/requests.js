import axios from 'axios';
import checkStatus from 'utils/requests';

export const signinUserAPI = (params) => axios.post('http://localhost:3000/auth/sign_in', { email: params.email, password: params.password }).then(checkStatus);
