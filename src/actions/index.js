import axios from 'axios';

import { CLICK_UPDATE_VALUE } from './actionTypes';

export const getLugarSuccess = id => {
    return {
        type: CLICK_UPDATE_VALUE,
        lugar: id
    }
}

export const consultarCEP = cep => {
    return (dispatch) => {
        return axios.get(`https://viacep.com.br/ws/${cep}/json`)
            .then(response => {
                dispatch(getLugarSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    }
};