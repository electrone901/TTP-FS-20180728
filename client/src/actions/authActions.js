import axios from '../axios-stocks';
import { GET_ERRORS } from './types';
 export const registerUser = userData => dispatch => {
    axios.post('/api/register', userData)
      .then(res => console.log(res.data))
      .catch(err =>
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
      );
}; 