import axios from 'axios';

import { CLICK_UPDATE_VALUE } from './actionTypes';

export const consultarCEP = (cep) => {
    const request = axios.get(`https://viacep.com.br/ws/${cep}/json`)
    return {
        type: CLICK_UPDATE_VALUE,
        lugar: request
    }
};