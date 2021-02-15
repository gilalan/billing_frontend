import { toastr } from 'react-redux-toastr';
import axios from 'axios';
import { OAPI_BASE_URL } from '../helpers/Consts';

export function login(values) {
    return _submit(values, `${OAPI_BASE_URL}/login`);
}

export function signup(values) {
    return _submit(values, `${OAPI_BASE_URL}/signup`);
}

export function logout() {
    return { type: 'TOKEN_VALIDATED', payload: false };
}

export function validateToken(token) {
    return dispatch => {
        if (token){
            axios.post(`${OAPI_BASE_URL}/validateToken`, {token})
                .then(resp => {
                    dispatch({type: 'TOKEN_VALIDATED', payload: resp.data.valid});
                })
                .catch(e => dispatch({type: 'TOKEN_VALIDATED', payload: false}));
        } else {
            dispatch({type: 'TOKEN_VALIDATED', payload: false});
        }
    }
}

function _submit(values, url) {
    //console.log("Submetendo o formulário... ", values);
    return dispatch => {
        axios.post(url, values)
            .then(resp => {
                //console.log("Resposta do server: ", resp.data);
                dispatch([
                    { type: 'USER_FETCHED', payload: resp.data }
                ])
            })
            .catch(e => {
                e.response.data.errors.forEach(
                    error => toastr.error('Erro', error));
            })
    }
}